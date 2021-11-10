// icons
import { BsFillDoorOpenFill } from 'react-icons/bs';

//  Db
import { auth } from "../../db/index";

// component
import Icon from '../Icon';


const SignOut = ({ iconStyle = 'ml-1' }) => {
    return auth.currentUser && (
        <div className="sign-out" onClick={() => auth.signOut()}>
            <Icon icon={< BsFillDoorOpenFill size='24' className={iconStyle} />} text={'Sign Out'} />
        </div>
    )
}


export default SignOut;