import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { Carousel } from "./Carousel";

export function Start(){
    return(
        <>
            <section className="w-full h-screen flex flex-col items-center">
                <Carousel/>
                <div className="h-2/6 flex flex-col justify-center items-center" >
                    <h1 className="text-5xl">DIEGO M. RUIZ</h1>
                    <button className="px-4 py-1 border-solid border-white border-2 rounded-xl my-5 text-2xl"> About me</button>
                </div>
            </section>
            <section className="w-full flex flex-col items-center ">
                <div className="flex w-64 mb-8 justify-around items-center">
                    <a href="https://www.youtube.com/@Tacoelshido"><FaYoutube size={35}/></a>
                    <a href="https://www.instagram.com/tacoelshido/"><FaInstagram size={35}/></a>
                    <a href=""><FaLinkedin size={35}/></a>
                    <a href="https://x.com/tacoelshido"><RiTwitterXFill size={35}/></a>
                    <a href="https://www.tiktok.com/@tacoelshido"><FaTiktok size={28}/></a>
                </div>

                <div className="w-full mb-16">
                    <p className="my-4 text-2xl">Contact</p>
                    <textarea name="" id="" className="bg-transparent border-2 border-solid rounded-xl w-5/12 min-h-48 p-2"></textarea>
                </div>
            </section>
        </>
    )
}