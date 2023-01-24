import React from 'react'
import "./WhatIs.scss"
import { motion, useScroll } from "framer-motion"

function WhatIs() {
    const { scrollYProgress } = useScroll();
    return (<>
        <motion.div className={"WhatIs"} style={{ opacity: scrollYProgress }}>

            UMN Festival 2023 adalah sebuah festival tahunan terbesar di Universitas Multimedia Nusantara sebagai bentuk perayaan ulang tahun UMN.

            Tidak hanya berbentuk perayaan semata, tahun ini UMN Festival mengadakan 4 rangkaian kegiatan, yaitu UNVEILING, UCARE, ULYMPIC, dan UNIFY yang diantaranya meliputi kegiatan sosial dan pertandingan di bidang olahraga.

            Bersinergi bersama, 13 divisi keluarga besar UMN Festival 2023 siap menjadikan festival tahun ini sebagai sarana yang penuh dengan petualangan yang menyenangkan dan membawa dampak positif untuk mengekspresikan bakat minat para mahasiswa.

        </motion.div>
    </>
    )
}

export default WhatIs