import { FunctionComponent, useState } from "react";
import styles from "@styles/modules/form-input.module.css";


interface FormInputProps {
    label: string;
    placeholder: string;
    setValue: (value: string) => void;
    value: string;
    
    icon ?: string;
    isConfidential ?: boolean;
    classNameTweak ?: string;
}
 
const FormInput: FunctionComponent<FormInputProps> = ({label, placeholder, icon, isConfidential, value, setValue, classNameTweak}) => 
{
    const [isTextVisible, setTextVisibility] = useState(!isConfidential);

    const eyeToShow = isTextVisible ? "/eye.svg" : "/eye-close.svg";
    // onInput change set value to state
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <div className={`${styles.container} ${classNameTweak}`}>
            <p className={styles.label}>{label}</p>
            <div className={styles.input_container}>
                { icon && <img src={icon} alt="icon" className={styles.icon}/>}
                <input className={styles.input} value={value} 
                        type={isTextVisible ? "text" : "password"} placeholder={placeholder}
                        onChange={onInputChange}>
                </input>
                {
                    isConfidential &&
                    <img src={eyeToShow} onClick={() => setTextVisibility(!isTextVisible)} alt="eye" className={styles.visibility}/>
                }
            </div>
        </div>
    );
}
 
export { FormInput };