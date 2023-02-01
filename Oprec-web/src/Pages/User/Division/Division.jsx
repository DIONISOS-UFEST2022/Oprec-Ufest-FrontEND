import { useEffect } from "react"
import "./Division.scss"
import DivisonCarousel from "./DivisonCarousel/Carousel"

export default function Division(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<>
        <div className="Division">
            <h1>Our Division</h1>
            <br />
            <DivisonCarousel />
        </div>
    </>)
}