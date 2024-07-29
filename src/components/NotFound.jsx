import { notFound } from "../assets/img/images";

export default function NotFound(){
    return(
        <div className="h-screen w-screen base flex flex-col justify-center items-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl">Not Found :/</h1>
            <img className="lg:w-1/6 w-1/3 mt-10" src={notFound} alt={"asddsa"} />
        </div>
    )
}