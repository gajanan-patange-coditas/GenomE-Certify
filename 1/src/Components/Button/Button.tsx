 
import styles from "./Button.module.scss"
import type { ButtonProps } from "./Button.types"
 
const Button = ({children,className,...props}: ButtonProps) =>
{
return(

    <button {...props} 
    className={[styles.button,className].join(' ')}
    >{children}</button>
)
}

export const PrimaryBtn = (props:ButtonProps) =>{
    return(
       <Button 
       className={styles.primaryBtn}
        {...props}/>
    )
}


export const SecondaryBtn = (props:ButtonProps) =>{
    return(
       <Button 
       className={styles.secondaryBtn}
        {...props}/>
    )
}
export default Button;