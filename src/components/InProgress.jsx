import { inProgress } from "../assets/img/images";


export default function InProgress(){
    return(
        <div className="h-screen w-screen base flex flex-col justify-center items-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl">Work in progress...</h1>
            <img className="lg:w-1/6 w-1/3 mt-10" src={inProgress} alt={"asddsa"} />
        </div>
    )
}