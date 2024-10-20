import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { GiEnergySword } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";
import auth from "../../firebase/firebase.config";


const Login = () => {

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [show, setShow] = useState(true);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccessMsg('User Login Successfully');
            })
            .catch(error => {
                setErrorMsg(error.message);
            });

    };

    const handleShowPass = () => {
        setShow(!show);
    };


    return (
        <div>
            <h1 className="text-3xl my-10 font-bold">Login</h1>
            <form onSubmit={handleLogin} className="space-y-5 relative w-1/2 mx-auto ">
                <input placeholder="Email" className="input input-bordered w-full input-success" required type="email" name="email" />
                <div className="relative">
                    <input placeholder="Password" className="input input-bordered w-full input-success" required type={show ? "password" : "text"} name="password" />
                    <span className="text-xl absolute top-4 right-6" onClick={handleShowPass}>{show ? <GiEnergySword></GiEnergySword> : <GiCrossedSwords></GiCrossedSwords>}</span>
                </div>
                {errorMsg && <h1 className="text-red-500">{errorMsg}</h1>}
                {successMsg && <p className="text-green-400">{successMsg}</p>}
                <br />
                <input className="btn btn-outline" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;