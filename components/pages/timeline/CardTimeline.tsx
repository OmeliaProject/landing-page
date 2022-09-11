import { FunctionComponent } from "react";

import styles from "@styles/modules/timeline_project.module.css";
import { AnimatePresence, motion } from "framer-motion";

enum LineType {
    DOTTED,
    SOLID, 
    NONE,
}

interface CardTimelineProps {
    title : string;
    time : string;
    body ?: string;
    version ?: string;
    line ?: LineType;
}
 
const CardTimeline: FunctionComponent<CardTimelineProps> = ({title, body, version, time, line = LineType.SOLID }) => {

    const mapLineType : Map<LineType, string> = new Map<LineType, string>(
        [
            [LineType.DOTTED, styles.dotted],
            [LineType.SOLID, styles.solid],
            [LineType.NONE, styles.none],
        ]
    );


    return (
        <>
        <div className={styles.date_container}>
            <p className={styles.date}>{time}</p>
            <div className={mapLineType.get(line)} />
        </div>

        <AnimatePresence>
            <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
                {
                    type: "spring",
                    duration: 1,
                    delay: 0.25,
                }
            }
            className={styles.card} data-dotted={line === LineType.DOTTED}>
                <p className={styles.title}>{title}</p>
                {body && <p className={styles.body}>{body}</p>}
                {version && <p className={styles.version}>Omelia <b>.</b> V{version}</p>}
            </motion.div>
        </AnimatePresence>
        </>
    );
}
 
export { CardTimeline };

export { LineType };