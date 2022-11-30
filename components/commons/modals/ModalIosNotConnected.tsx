import useModal from '@hooks/useModal';
import styles from '@styles/modules/modal.module.css';
import { useRouter } from 'next/router';
import { FC } from "react";
import { Button, ButtonType } from '@components/commons/Button';

export const ModalIosNotConnected : FC= ({}) => 
{
    const { handleModal} = useModal();
    const router = useRouter();

    const goToPageLogin = async () => {
        router.push('beta/login');
        handleModal();
    }

    return (
        <>
            <div data-centered className={styles.modal_header}>
                <h2 className={styles.modal_title}>Rejoindre la Bêta IOS </h2>
                <p className={styles.modal_text}>
                    Pour rejoindre la bêta IOS, veuillez vous connectez ou créer un compte Omelia 
                </p>
            </div>
            <Button onClick={goToPageLogin} classNameTweak={styles.full_width} type={ButtonType.PRIMARY} >Aller à la page de connexion</Button>
        </>
    );

}
