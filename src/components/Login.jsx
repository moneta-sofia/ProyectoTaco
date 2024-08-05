import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [invalidInput, setInvalidInput] = useState(false);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const [redirectMssg, setRedirectMssg] = useState(false);
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user ||!password) {
            setInvalidInput(true);
            return;
        }else{
            setInvalidInput(false);
        }

        setWrongCredentials(false)
        setLoading(true);
        axios.post("https://backtaco.onrender.com/user/signin", {
            user: user,
            password: password,
        }).then(function (response) {
            setWrongCredentials(false);
            localStorage.setItem("token", response.data.token);
            setRedirectMssg(true);
            navigate("/");
        }).catch(function (error) {
            console.log(error.message);
            setWrongCredentials(true);
        }).finally(() => {
            setLoading(false);
        });
    };


    return (
        <div className="base h-screen w-full flex flex-col justify-center items-center text-3xl">
            <h1 className="text-6xl">Login Page</h1>
            <form action="" onSubmit={handleSubmit} noValidate className="flex flex-col text-3xl mt-10">
                <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} className="my-5 p-2 rounded-xl text-black" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="my-5 p-2 rounded-xl text-black" />
                {loading && <p>Loading...</p>}
                {invalidInput && <p>Fields empty!</p>}
                {wrongCredentials && <p>Wrong credentials!</p>}
                {redirectMssg && <p>Redirecting...</p>}
                <button type="submit" className="my-5 p-2 border-white border-solid border-4 rounded-xl hover:bg-slate-900 active:bg-slate-800">Login</button>
            </form>
        </div>
    )
}