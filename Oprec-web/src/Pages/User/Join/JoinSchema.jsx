import * as Yup from "yup";
import { JurusanData } from "./AutoComplete/AutoComplete";

export const JoinSchema = Yup.object().shape({
    jurusan: Yup.string()
        .required("Jurusan is a required field")
        .oneOf(JurusanData.map((data) => data.label), "Jurusan is a required field"),
    angkatan: Yup.string()
        .required("Angkatan is a required field")
        .oneOf(["2020", "2021", "2022"], "Angkatan is a required field"),
    alamat: Yup.string()
        .required("Alamat is a required field"),
    nohp: Yup.string()
        .required("No HP is a required field")
        .min(10, "Enter a valid phone number")
        .max(16, "Enter a valid phone number")
        .matches(/^(^\+62\s?)(\d{3,4}-?){2}\d{3,4}$/, "Enter a valid phone number"),
    idline: Yup.string()
        .required("ID Line is a required field"),
    ig: Yup.string()
        .required("Instagram is a required field"),
    domisili: Yup.string()
        .required("Domisili is a required field"),
    divisi: Yup.string()
        .oneOf([
            "Dekorasi",
            "Publikasi",
            "Keamanan",
            "Fresh Money",
            "Sponsor",
            "Dokumentasi",
            "Acara",
            "Perlengkapan",
            "Lomba",
            "Konsumsi",
            "Website",
            "Visual"
        ])
        .required("Division is a required field"),
    divisialt: Yup.string()
        .required("Division is a required field"),
    jawaban: Yup.string()
        .required("Answer is a required field"),
    jawaban2: Yup.string()
        .required("Answer is a required field"),
    portofolio: Yup.string()
        .required("Portofolio is a required field")
        .matches(/^https:\/\/drive\.google\.com\/(file\/d\/|folderview\?id=|open\?id=|drive\/folders\/)([a-zA-Z0-9-_]+)/,
            "Link must be from Google Drive"),

});
