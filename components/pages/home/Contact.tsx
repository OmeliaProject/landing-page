import { RefObject, FunctionComponent, useRef, useState} from "react";

import { LinkContact } from "@components/pages/home/LinkContact";
import emailjs from '@emailjs/browser';
import styles from "@styles/modules/contact.module.css"
import { Button, ButtonType } from "@components/commons/Button";
import { promiseToast } from "@components/commons/promiseToast";

interface ContactProps {
    contactRef : RefObject<HTMLDivElement>
}


const Contact: FunctionComponent<ContactProps> = ({ contactRef }) => {
    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current)
            return;

        promiseToast(
            emailjs.sendForm('service_ih0x5lo', 'template_c0xfzx9', form.current, 'user_YTYwoUOvEF41yOhBTNY79')
            ,
            {
                pending: "Envoi du message...",
                success: "Message envoyé.",
                error: "Echec de l'envoi du message"
            }
        ).catch();
        form.current.reset()
    }

    return (
        <div className={styles.contact} ref={contactRef}>
            <div className={styles.cta}>
                <h1 className={styles.cta_head}>Envie d’en savoir plus ?</h1>
                <p className={styles.cta_subhead}>envoyez-nous un message !</p>
            </div>


            <form className={styles.forms} ref={form} onSubmit={sendEmail}>
                <input data-decoration required placeholder="email: jean@hotmail.com" className={styles.email_input} type="email" name="from_name" /> 
                <textarea  data-decoration required placeholder="votre superbe message" className={styles.body_input} name="message"  cols={30} rows={10}></textarea>
                <div className={styles.submit_container}>
                    <Button type={ButtonType.PRIMARY} data-decoration 
                    settings={{type:"submit"}} 
                    classNameTweak={styles.button_submit}>Envoyer</Button>
                </div>
            </form>
        
            <div className={styles.link_container}>
                <LinkContact link="mailto:omelia.contact@gmail.com" image="/gmail-logo.svg">
                    <p>omelia.contact@gmail.com</p>
                </LinkContact>
                <LinkContact link="https://www.linkedin.com/company/omelia-studio/" image="/linkedin-logo.svg">
                    <p>www.linkedin.com/company/omelia-studio</p>
                </LinkContact>
                <LinkContact link="https://www.twitter.com/omelia_studio" image="/twitter.svg">
                    <p>www.twitter.com/omelia_studio</p>
                </LinkContact>

                <LinkContact link="https://www.discord.gg/rtNHeDtnzq" image="/discord-logo.svg">
                    <>
                        <p>www.discord.gg/rtNHeDtnzq</p>
                        <div className={styles.join_beta}>
                            <p>Aidez-nous en devenant bêta-testeur</p>
                            <img src="/arrow.svg" alt="arow" />
                        </div>
                    </>
                </LinkContact>
            
            </div>

        </div>
    );
}
 
export { Contact };