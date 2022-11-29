import {FC} from 'react';
import styles from '@styles/modules/download_buttons.module.css';
import { ModalIOS } from '@components/commons/modals/ModalIos';
import useApi from '@hooks/useTransportLayer';
import useModal from '@hooks/useModal';
import { ModalIosNotConnected } from './modals/ModalIosNotConnected';

interface DownloadButtonsProps {
    theme : 'light' | 'dark';
}

const AppleStoreButton : FC<DownloadButtonsProps> = ({theme}) => {
    const { handleModal } = useModal();
    const api = useApi();

    return (
        <div data-theme={theme} 
        className={styles.button}
        onClick={() => handleModal(api.user.isSignedIn() ? <ModalIOS/> : <ModalIosNotConnected/>)}>
            <img alt='apple-logo' src={`/apple-logo-${theme}.svg`} />
            <div className={styles.body}>
                <p>Télècharger dans</p>
                <h2>{"l'App Store"}</h2>
            </div>

        </div>
    )
}


const AndroidStoreButton : FC<DownloadButtonsProps> = ({theme}) => {
    return (
        <a data-theme={theme} className={styles.button}  href="https://apk-bucket.s3.eu-west-3.amazonaws.com/app-release.apk" >
            <img alt='play-store-logo' src={`/play-store-logo-${theme}.svg `} />
            <div className={styles.body}>
                <p>{"Télècharger l'APK"}</p>
                <h2>Android</h2>
            </div>
        </a>
    )
}



export {
    AppleStoreButton,
    AndroidStoreButton
}