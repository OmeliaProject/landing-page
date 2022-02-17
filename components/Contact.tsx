import { RefObject, FunctionComponent, useRef } from "react";

import LinkContact from "./LinkContact";
import emailjs from '@emailjs/browser';
import styles from "../styles/contact.module.css"

interface ContactProps {
    contactRef : RefObject<HTMLDivElement>
}
 
const Contact: FunctionComponent<ContactProps> = ({ contactRef }) => {
    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current)
            return;
        
        emailjs.sendForm('service_ih0x5lo', 'template_c0xfzx9', form.current, 'user_YTYwoUOvEF41yOhBTNY79')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
    }


    return (
        <div className={styles.contact} ref={contactRef}>
               
            <div className={styles.cta}>
                <h1 className={styles.cta_head}>Envie d’en savoir plus ?</h1>
                <p className={styles.cta_subhead}>envoyez nous un message !</p>
            </div>


            <form className={styles.forms} ref={form} onSubmit={sendEmail}>
                <input  placeholder="email: jean@hotmail.com" className={styles.email_input} type="email" name="from_name" /> 
                <textarea  placeholder="votre superbe message" className={styles.body_input} name="message"  cols={30} rows={10}></textarea>
                <button type="submit" className={styles.button_submit}>envoyer</button>
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
                            <p>Aidez nous en devenant beta-testeur</p>
                            <img src="/arrow.svg" alt="arow" />
                        </div>
                    </>
                </LinkContact>
            
            </div>

        </div>
    );
}
 
export default Contact;