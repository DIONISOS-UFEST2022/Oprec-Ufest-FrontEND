import "./Division.scss"
import { lazy, Suspense } from "react"
// const DivisonCarousel = lazy(() => import('./DivisonCarousel/Carousel'))
import DivisonCarousel from "./DivisonCarousel/Carousel"

export default function Division(props) {
    return (<>
        <div className="Division">
            <DivisonCarousel />
        </div>
    </>)
}