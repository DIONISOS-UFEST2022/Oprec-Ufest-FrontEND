import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Database } from "../Database/Database";
import { DivisonMenu } from "./DivisonDetail/DivisionMenuDetail";
import { DivisionNav } from "./DivisionNav/DivisionNav";


export function Division(props) {
    const [division, setdivision] = useState('divison');
    const handleClick = pagestate => {
        setdivision(pagestate);
    };
    return (
        <Box className="Divison">
            {(() => {
                switch (division) {
                    case 'divison':
                        return <DivisionNav handleClick={handleClick} />;
                    case 'BPH':
                        return <DivisonMenu name={"BPH"} handleClick={handleClick} />;
                    case 'Dekorasi':
                        return <DivisonMenu name={"Dekorasi"} handleClick={handleClick} />;
                    case 'Publikasi':
                        return <DivisonMenu name={"Publikasi"} handleClick={handleClick} />;
                    case 'Keamanan':
                        return <DivisonMenu name={"Keamanan"} handleClick={handleClick} />;
                    case 'Fresh Money':
                        return <DivisonMenu name={"Fresh Money"} handleClick={handleClick} />;
                    case 'Sponsor':
                        return <DivisonMenu name={"Sponsor"} handleClick={handleClick} />;
                    case 'Dokumentasi':
                        return <DivisonMenu name={"Dokumentasi"} handleClick={handleClick} />;
                    case 'Acara':
                        return <DivisonMenu name={"Acara"} handleClick={handleClick} />;
                    case 'Perlengkapan':
                        return <DivisonMenu name={"Perlengkapan"} handleClick={handleClick} />;
                    case 'Lomba':
                        return <DivisonMenu name={"Lomba"} handleClick={handleClick} />;
                    case 'Konsumsi':
                        return <DivisonMenu name={"Konsumsi"} handleClick={handleClick} />;
                    case 'Website':
                        return <DivisonMenu name={"Website"} handleClick={handleClick} />;
                    case 'Visual':
                        return <DivisonMenu name={"Visual"} handleClick={handleClick} />;
                    default:
                        return null;
                }
            })()}
        </Box>)
}


// Atlas BPH
// Antheia Dekorasi
// Iris Publikasi
// Erinnyes Keamanan
// Tyche Fresh Money
// Plutus Sponsor
// Phoebe Dokumentasi
// Prometheus Acara
// Hermes Perlengkapan
// Ares Lomba
// Hestia Konsumsi
// Dionysus Website
// Muses Visual