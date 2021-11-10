const Icon = ({ icon, text }) => {
    return (
        <div className='flexCenter transition-all text-sm'>
            {text}
            {icon}
        </div>
    )
}

export default Icon;