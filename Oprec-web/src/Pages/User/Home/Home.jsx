import { Box, Heading, Image } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import "./Home.scss"

export default function Home() {
    const homeTitleRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.add('loaded')
            })
        }, 500);
        setTimeout(() => {
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.add('faded')
            })
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.remove('loaded')
            })
            homeTitleRef.current.style.opacity = 1;
        }, 1000);
    })

    const homeRef = useRef(null);

    return (
        <Box ref={homeRef} className="home" height={"900px"}>
            <div className="circle first"></div>
            <Heading opacity={0} ref={homeTitleRef}>Really feels like Home. </Heading>
        </Box>
    )
}