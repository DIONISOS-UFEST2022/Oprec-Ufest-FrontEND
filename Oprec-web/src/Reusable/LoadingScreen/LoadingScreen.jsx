import { m, LazyMotion, domAnimation } from "framer-motion"
import "./LoadingScreen.scss"

export default function LoadingScreen() {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0 }}
                className="Loading-Screen"
            >
                UFEST 2023 now loading...
            </m.div>
        </LazyMotion>
    )
}