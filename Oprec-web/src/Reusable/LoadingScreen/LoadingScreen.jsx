import { m, LazyMotion, domAnimation } from "framer-motion"
import "./LoadingScreen.scss"

export default function LoadingScreen() {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={{
                    opacity: 1
                }}
                exit={{ opacity: 0 }}
                className="Loading-Screen"
            >
                <p className="Caption">
                    UFEST 2023 now loading...
                </p>
                <br />
                <div className="lds-circle">
                    <div>
                    </div>
                </div>
            </m.div>
        </LazyMotion>
    )
}