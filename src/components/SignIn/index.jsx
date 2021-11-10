// icons
import { FaGoogle } from 'react-icons/fa';

//  Db
import firebase from 'firebase/compat/app';
import { auth } from "../../db/index";

// component
import Icon from '../Icon';


const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="flexCenter relative w-screen h-screen bg-sideColor text-primary ">
            <button className="signinButt relative sign-in" onClick={signInWithGoogle}>
                <Icon icon={< FaGoogle size='24' className='ml-1' />} text={'Sign in with'} />
            </button>
        </div>
    )
}


export default SignIn;