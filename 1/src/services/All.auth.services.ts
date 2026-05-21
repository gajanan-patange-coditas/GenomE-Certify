import { authApi } from "../api/admin";
import type { User } from "../App.types";
import type { LoginData } from "../Components/LoginPage/Login.types";
import type { RegisterData } from "../Components/RegisterPage/Register.types";

 interface Response {
    access_token: string,
    user: User
}
const registerUser = async (data: FormData) => {
  try {
    const response = await authApi.post("CANDIDATE/registeration", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if (response.status === 201 || response.status === 200) {
      alert("Registered Successfully !!");
    }
  } catch (e) {
    console.error("error", e);
    alert("Registration Failed");
  }
}


const loginUser = async (data: LoginData) => {
    try {
        const response = await authApi.post<Response>("/login", data);
        console.log("response: ",response);
        if (response.status === 200) {
            alert(" Successful");
            const token = response.data.access_token;
            const user = response.data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
             
        }
        if (response.status === 401) {
            console.log(response);
        }
        return response.data.user;
    } catch (e) {
        console.log("loginerr:", e);
    }
}


export default {
    registerUser,
    loginUser
}

