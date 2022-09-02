import { RefObject, FunctionComponent } from "react";
import styles from "@styles/modules/home.module.css"
import ScrollToButton from "@components/commons/ScrollToButton";

interface HomeProps {
    homeRef : RefObject<HTMLDivElement>
    aboutRef : RefObject<HTMLDivElement>
}
 
const Home: FunctionComponent<HomeProps> = ({ homeRef, aboutRef }) => {


    return (
        <div className={styles.home} ref={homeRef}>

            <div className={styles.container_cta}>
                <div className={styles.text_cta}>
                    <p>Ammenez votre<br/><span className="emphasized-light">élocution</span> au niveau<br/>supérieur !</p>
                </div>
                <ScrollToButton styleClass={styles.button_cta} target={aboutRef}>en savoir plus</ScrollToButton>
            </div>

            <div className={styles.people}>
                <img src='/people.svg' alt='next' />
            </div>

            <img className="separator" src="wave-separator-1.svg"/>
        </div>
    );
}
 
export default Home;