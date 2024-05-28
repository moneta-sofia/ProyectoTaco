import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function Start(){
    return(
        <>
            <section>
                <h1 className="text-5xl">DIEGO M. RUIZ</h1>
                <button className="px-4 py-1 border-solid border-white border-2 rounded-xl my-5 text-2xl"> About me</button>
            </section>
            <section>
                <div className="flex">
                    <a href=""><FaYoutube/></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><RiTwitterXFill /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </section>
        </>
    )
}