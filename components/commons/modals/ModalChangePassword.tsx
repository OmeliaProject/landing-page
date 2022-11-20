import styles from "@styles/modules/modals/change_password.module.css";
import { FC, useState } from "react";
import { Button, ButtonType } from "@components/commons/Button";
import { FormInput } from "@components/commons/FormInput";


interface ModalChangePasswordProps {
    changePassword : (currentPassword : string, newPassword: string) => void;
}

export const ModalChangePassword : FC<ModalChangePasswordProps> = ({changePassword}) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword , setNewPassword] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changePassword(currentPassword, newPassword);
    }

    return (
        <>
            <div className={styles.header}>
                <h2>Changer de mots de passe:</h2>
                <p>Pour mieux protéger votre mot de passe, suivez ces rêgles:</p>
                <ul>
                    <li>Votre mot de passe doit contenir des chiffres.</li>
                    <li>Votre mot de passe doit contenir des lettres majuscules.</li>
                    <li>Votre mot de passe doit comporter au moins un symbole.</li>
                    <li>La longueur doit être supérieure à 8 caractères</li>
                </ul>
            </div>

            <form className={styles.form_modal_change_password} onSubmit={onSubmit}>
                <FormInput
                        label={"Ancien mots de passe"}
                        placeholder={"votre ancien mots de passe"}
                        icon={"/lock.svg"}
                        isConfidential
                        setValue={setCurrentPassword}
                        value={currentPassword}
                        />
                <FormInput
                        label={"Nouveau mots de passe"}
                        placeholder={"votre nouveau mots de passe"}
                        icon={"/lock.svg"}
                        isConfidential
                        setValue={setNewPassword}
                        value={newPassword}
                        />
                <Button settings={{type:"submit"}} classNameTweak={styles.password_button} type={ButtonType.PRIMARY} >Changer de mot de passe</Button>
            
            </form>
        </>
    );
}
