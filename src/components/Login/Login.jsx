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

        </div>
    );
};

export default Login;