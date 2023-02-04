import { useEffect } from "react"
import "./Division.scss"
import DivisonCarousel from "./DivisonCarousel/Carousel"
import { setCookie } from "react-use-cookie";


export default function Division(props) {
    useEffect(() => {
        setCookie('division', 'division', { path: '/' });
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