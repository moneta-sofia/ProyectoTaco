import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext";

export default function LanguageButton(){
    const {isSpanish, setIsSpanish} = useContext(LanguageContext);

    return (
        <button
            className={`z-50 top-0 cursor-pointer bg-white text-black font-bold text-2xl flex items-center justify-center py-4 px-5 z-60 rounded-full transition-transform shadow-mdButCenter`}
            onClick={() => setIsSpanish(!isSpanish)}
        >
            {isSpanish ? "En" : "Es"}
        </button>
    )
}