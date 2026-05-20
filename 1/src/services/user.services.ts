 
const getLoggedUser = () => {
    try {
        const user = JSON.parse(localStorage.getItem("user") ?? JSON.stringify(''));
        if(!user) return;
        return user;
    } catch (e) {
        console.log("err in getLoggedInUser: ", e);
    }
}

export default {
    getLoggedUser
}