// icons
import { AiOutlineClose } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaArrowCircleUp } from 'react-icons/fa';

// component
import Icon from '../Icon';
import SignOut from '../SignOut';
import WaterMark from '../WaterMark';
// functions

const SideMenu = () => {
    return (
        <div id='sideNav' className="sideNav">
            {/* nav header */}
            <div className="header">
                {/* nav close btn */}
                <div onClick={hideNav} className="menuIcon " >
                    <Icon icon={< AiOutlineClose size='26' className='order-first' />} text={''} />
                </div>
                <WaterMark style={'text-xl relative text-2xl'} />
                <div onClick={hideNav} className="menuIcon invisible" >
                    <Icon icon={< AiOutlineClose size='26' className='' />} text={''} />
                </div>
            </div>

            {/* nav content */}
            <a href="https://github.com/ELATTAR-Ayoub/React-Firebase-YukiChat" rel="noreferrer" target='_blank'>
                <Icon icon={< BsGithub size='28' className='mr-2 order-first text-center ' />} text={'GitHub'} />
            </a>

            <SignOut iconStyle='mr-2 order-first' />

            {/* nav close btn */}
            <div className="absolute top-semi-big left-0 w-full p-2 my-0 max-h-mini">
                this app is created by ELATTAR Ayoub.
            </div>
            <div onClick={hideNav} className="ss absolute bottom-0 left-0 w-full p-2 my-0 max-h-mini animate-bounce">
                <Icon icon={< FaArrowCircleUp size='24' className='order-first' />} text={''} />
            </div>
        </div>
    )
}

const hideNav = () => {
    const nav = document.getElementById('sideNav');
    nav.style.height = '0%';
}


export default SideMenu;