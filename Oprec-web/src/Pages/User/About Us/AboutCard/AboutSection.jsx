import React, { useRef } from "react";
import { useInView, useScroll, motion } from "framer-motion";

export default function AboutSection({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { scrollYProgress } = useScroll();
    return (
        <motion.section
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                // transition: "all 0.9s cubic-bezier(0, 0, 0, 0.55, 1) 1s"
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            {children}
        </motion.section>
    );
}
