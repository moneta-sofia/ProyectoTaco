import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("ASD");
        axios.post("https://backtaco.onrender.com/user/signin", {
            user: user,
            password: password,
        }).then(function (response) {
            setWrongCredentials(false)
            localStorage.setItem("token", response.data.token);
            
        }).catch(function (error) {
            console.log(error.message);
            setWrongCredentials(true)
        });
    };


    return (
        <div className="base h-screen w-full flex flex-col justify-center items-center text-3xl">
            <h1 className="text-6xl">Login Page</h1>
            <form action="" onSubmit={handleSubmit} noValidate className="flex flex-col text-3xl mt-10">
                <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} className="my-5 p-2 rounded-xl text-black" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="my-5 p-2 rounded-xl text-black" />
                {wrongCredentials && <p>Wrong credentials!</p>}
                <button type="submit" className="my-5 p-2 border-white border-solid border-4 rounded-xl hover:bg-slate-900 active:bg-slate-800">Login</button>
            </form>
        </div>
    )
}