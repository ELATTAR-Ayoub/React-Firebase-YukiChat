const WaterMark = ({ style }) => {
    return (
        <div className={'bg-transparent relative uppercase font-bold dark:text-sideColor cursor-pointer flexCenter text-xl md:text-2xl ' + style} >
            yuki
            < span className='text-secondary' >
                chat
            </span >
        </div >
    )
}

export default WaterMark;