import { Box, Image, Heading } from "@chakra-ui/react"
import "./About.scss"
import axios from "axios"

export function About() {
  // axios.get("http://127.0.0.1:8000/api/test").then((res) => {
  //   console.log(res.data)
  // })

  return (
    <Box className="about">
      <Heading fontSize={['20px', '30px', '40px']}>This is About</Heading>
      <Image src="" alt="logo" backgroundColor={"black"} w="100px" height={"100px"} borderRadius="50%" />
    </Box>
  )
}