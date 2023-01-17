import { Box, Image, Heading } from "@chakra-ui/react"
import "./About.scss"
import axios from "axios"
import { AboutCard } from "./AboutCard/AboutCard"

export function About() {
  // axios.get("http://127.0.0.1:8000/api/test").then((res) => {
  //   console.log(res.data)
  // })
  return (
    <Box className="about">
      <Heading className="heading" fontSize={['20px', '30px', '40px']}>This is About</Heading>
      {/* <Image src="" alt="logo" backgroundColor={"black"} w="100px" height={"100px"} borderRadius="50%" /> */}
      <br />
      <AboutCard
      direction="row"
      text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
      <AboutCard
      direction="row-reverse"
      text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
      <AboutCard
      direction="row"
      text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
      <AboutCard
      direction="row-reverse"
      text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
    </Box>
  )
}