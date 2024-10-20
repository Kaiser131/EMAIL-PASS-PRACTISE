import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Register = () => {



    // majhe majhe auto import hoina jodi vs code onek khon por open kora hoi .... tokhon jekono kicu export korle auto refresh hoe jabe


    const handleRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message);
            });



    };


    return (
        <div>
            <h1 className="text-3xl my-10 font-bold">Please Register</h1>
            <form onSubmit={handleRegister} className="space-y-5 w-1/2 mx-auto ">
                <input placeholder="Name" className="input input-bordered w-full input-success" type="text" name="name" />
                <input placeholder="Email" className="input input-bordered w-full input-success" type="email" name="email" />
                <input placeholder="Password" className="input input-bordered w-full input-success" type="password" name="password" />
                <input className="btn btn-outline" type="submit" value="submit" />
            </form>


        </div>
    );
};

export default Register;