import {FunctionComponent} from "react";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import styles from "@styles/modules/carousel.module.css";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface CarouselProps {
    classNameCarousel: string;
    children: React.ReactChild[];
    width : number;
    wrap ?: boolean;
}

const Carousel : FunctionComponent<CarouselProps> = ({classNameCarousel, children, wrap, width} : CarouselProps) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const variants : Variants  = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? width : -width,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
        return {
            position : "absolute",
            zIndex: 0,
            x: direction < 0 ? width : -width,
            opacity: 0,
            transition : {
                delay : 0.01
            }
        };
        }
    };

    const paginate = (newDirection: number) => {
        let newPage : number  = page + newDirection;
        const sizeChildren : number  = children.length - 1;
        
        if (newPage < 0) {
            newPage = wrap ? sizeChildren : 0;
        } else if (newPage > sizeChildren) {
            newPage = wrap ? 0 : sizeChildren;
        }

        setPage([newPage, newDirection]);
    };

    return (
        <div className={classNameCarousel}>
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
                }
            }}
            >
                {children[page]}
            </motion.div>
        </AnimatePresence>
        <div className={styles.next} onClick={() => paginate(1)}>
            {"‣"}
        </div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
            {"‣"}
        </div>
        </div >
    );
};

export default Carousel;