// icons
import { GiHamburgerMenu } from 'react-icons/gi';

// component
import Icon from '../Icon';

// functions

const MenuButt = () => {
    return (
        <div className="relative p-2 m-2">
            <div onClick={dropNav} className="menuIcon" id='menuButt'>
                <Icon icon={< GiHamburgerMenu size='24' className='' />} text={''} />
            </div>
        </div>
    )
}

const dropNav = () => {
    const nav = document.getElementById('sideNav');
    nav.style.height = '100%';
}


export default MenuButt;