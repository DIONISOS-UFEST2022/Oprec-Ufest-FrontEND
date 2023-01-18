import { Box, Image, Heading } from "@chakra-ui/react"
import "./About.scss"
import axios from "axios"
import { AboutCard } from "./AboutCard/AboutCard"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function About() {
  return (<>
    <Box className="about">

      <Heading className="heading" fontSize={['20px', '30px', '40px']}>TENTANG</Heading>
      <Timeline position="right">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <AboutCard
              direction="row"
              text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <AboutCard
              direction="row-reverse"
              text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <AboutCard
              direction="row"
              text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <AboutCard
              direction="row-reverse"
              text="Unveiling merupakan kegiatan pembuka dari rangkaian kegiatan UFEST 2022. Kegiatan ini akan berlangsung pada bulan Agustus 2022. Unveiling sendiri mengangkat nilai “Curiosity” yang melambangkan keingintahuan/ ketertarikan seseorang. Curiosity adalah perasaan ingin tahu yang timbul dan dimiliki oleh manusia terhadap suatu hal yang belum memiliki penjelasan atau jawabannya. Diharapkan ketika peserta mengikuti kegiatan ini dapat meningkatkan rasa keingintahuannya sehingga memiliki kemauan untuk dapat mencari tahu sendiri. Unveiling juga dilambangkan dengan salah satu panthera yaitu Leopard." />
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <br />




    </Box>
  </>
  )
}