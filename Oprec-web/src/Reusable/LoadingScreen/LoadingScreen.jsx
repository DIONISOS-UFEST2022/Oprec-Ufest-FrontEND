import { useEffect } from "react"
import { motion } from "framer-motion"
import "./LoadingScreen.scss"
import { border, Box } from "@chakra-ui/react"

export function LoadingScreen() {
    return (
        <Box
            className="loading-screen"
        >
            <motion.div
                className="content"
                animate={{
                    scale: [1, 1.4, 1.4, 1, 1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    rotate: [0, 0, 270, 270, 0],
                }}
                // initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >

            </motion.div>
            <Box
                className="innercontent"
            >
                Is
                <br />
                Loading...
                <br />
                Please
                <br />
                Wait
            </Box>
        </Box>
    )
}