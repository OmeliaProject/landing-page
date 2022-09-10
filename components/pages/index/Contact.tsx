import { RefObject, FunctionComponent, useRef, CSSProperties, useState} from "react";

import LinkContact from "@components/pages/index/LinkContact";
import emailjs from '@emailjs/browser';
import styles from "@styles/modules/contact.module.css"

interface ContactProps {
    contactRef : RefObject<HTMLDivElement>
}

enum FormStatus {
    LOADING =  "Envoi en cours...",
    ERROR =  "Une erreur s'est produite.",
    VALID = "Message bien envoyé!"
}

interface State {
    text : string
    style : string
}

const Contact: FunctionComponent<ContactProps> = ({ contactRef }) => {
    
    const form = useRef<HTMLFormElement>(null);

    const [formStatus, setFormStatus] = useState<State>({
        text : "",
        style : ""
    })

    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current)
            return;

        setFormStatus({
            text : FormStatus.LOADING,
            style : styles.loading
        })

        // TO PUT IN API SERVICE ! 
        emailjs.sendForm('service_ih0x5lo', 'template_c0xfzx9', form.current, 'user_YTYwoUOvEF41yOhBTNY79')
        .then((_) => {
            setFormStatus({
                text : FormStatus.VALID,
                style : styles.valide

            })
        }, (_) => {
            setFormStatus({
                text : FormStatus.ERROR,
                style : styles.error
            })
        });
        form.current.reset()

        setTimeout(() => {
            setFormStatus({
                text : "",
                style : ""
            })
        }, 5000)

    }


    return (
        <div className={styles.contact} ref={contactRef}>
            <div className={styles.cta}>
                <h1 className={styles.cta_head}>Envie d’en savoir plus ?</h1>
                <p className={styles.cta_subhead}>envoyez-nous un message !</p>
            </div>


            <form className={`${styles.forms} ${formStatus.style}` } ref={form} onSubmit={sendEmail}>
                <input data-decoration required placeholder="email: jean@hotmail.com" className={styles.email_input} type="email" name="from_name" /> 
                <textarea  data-decoration required placeholder="votre superbe message" className={styles.body_input} name="message"  cols={30} rows={10}></textarea>
                <div className={styles.submit_container}>
                    <p className={styles.validation_text}>{formStatus?.text}</p>
                    <button data-decoration type="submit" className={styles.button_submit}>envoyer</button>
                </div>
            </form>
        
            <div className={styles.link_container}>
                <LinkContact link="mailto:omelia.contact@gmail.com" image="/gmail-logo.svg">
                    <p>omelia.contact@gmail.com</p>
                </LinkContact>
                <LinkContact link="https://www.linkedin.com/company/omelia-studio/" image="/linkedin-logo.svg">
                    <p>www.linkedin.com/company/omelia-studio</p>
                </LinkContact>
                <LinkContact link="https://www.twitter.com/omelia_studio" image="/twitter-logo.svg">
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
 
export default Contact;