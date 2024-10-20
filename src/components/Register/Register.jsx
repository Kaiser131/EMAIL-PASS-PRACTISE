import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Register = () => {



    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // majhe majhe auto import hoina jodi vs code onek khon por open kora hoi .... tokhon jekono kicu export korle auto refresh hoe jabe

    const handleRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setErrorMsg('Set Up a Strong Password');
            return;
        }

        // this is for setuping emptying the condition
        setSuccessMsg('');
        setErrorMsg('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccessMsg('User Created Successfully');
            })
            .catch(error => {
                console.log('error', error.message);
                setErrorMsg(error.message);
            });
    };



    return (
        <div>
            <h1 className="text-3xl my-10 font-bold">Please Register</h1>
            <form onSubmit={handleRegister} className="space-y-5 w-1/2 mx-auto ">
                <input placeholder="Name" className="input input-bordered w-full input-success" type="text" name="name" />
                <input placeholder="Email" className="input input-bordered w-full input-success" type="email" name="email" />
                <input placeholder="Password" className="input input-bordered w-full input-success" type="password" name="password" />
                {errorMsg && <h1 className="text-red-500">{errorMsg}</h1>}
                {successMsg && <p className="text-green-400">{successMsg}</p>}
                <input className="btn btn-outline" type="submit" value="submit" />
            </form>


        </div>
    );
};

export default Register;