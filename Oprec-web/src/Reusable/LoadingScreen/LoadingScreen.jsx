import { m, LazyMotion } from "framer-motion"
import "./LoadingScreen.scss"

const loadFeatures = () => import("./LoadingFeature.jsx").then(res => res.default)

export default function LoadingScreen() {
    return (
        <LazyMotion features={loadFeatures}>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="Loading-Screen"
            >
                UFEST 2023 now loading...
            </m.div>
        </LazyMotion>
    )
}