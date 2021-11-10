
// icons
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

// component
import Icon from '../Icon';

// hooks
import useDarkMode from '../../Hooks/useDarkMode';

// functions

const DarkBtn = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <div onClick={handleMode} className='relative p-2 m-2'>
            <div className="menuIcon rounded-full hover:bg-secondary-dark hover:text-yellow-300 transition-all" id='menuButt '>
                {darkTheme ? (
                    <Icon icon={< BsFillSunFill size='24' />} text={''} />
                ) : (
                    <Icon icon={< BsFillMoonStarsFill size='24' />} text={''} />
                )}
            </div>
        </div>

    );

}


export default DarkBtn;