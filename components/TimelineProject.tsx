import { FunctionComponent } from "react";

import styles from "@styles/modules/timeline_project.module.css";
import CardTimeline, { LineType } from "./CardTimeline";

interface TimelineProjectProps {
    
}
 
const TimelineProject: FunctionComponent<TimelineProjectProps> = () => {
    return (
        <div className={styles.timeline_project}>
             <CardTimeline 
                        title={"Amelioration Video"}
                        body={"Lorem ipsum  elit, sed do eiusmod tempor.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor....."} 
                        time={"15/85/7888"}
                        line={LineType.DOTTED}
                        />
            <CardTimeline 
                        title={"Amelioration Video"}
                        body={"Lorem ipsum  elit, sed do eiusmod tempor.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor....."} 
                        version={"1.0.0"}
                        time={"15/85/7888"}
                        line={LineType.SOLID}
                        />
            <CardTimeline 
                        title={"Amelioration Video"}
                        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor....."} 
                        version={"1.0.0"}
                        time={"15/85/7888"}
                        line={LineType.NONE}
                        />   
        </div>
    );
}
 
export default TimelineProject;