const Team = ({ name, dsc, id, image }) => {
    return (
        <a href={`https://discord.com/users/${id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="relative flex flex-col items-center p-6 bg-white rounded drop-shadow-2xl">
                <img src={image} className='w-16 h-16 rounded-full -mt-1 mb-2' />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{name}</h4>
                <p className="text-gray-600 text-center">{dsc}</p>
            </div>
        </a>
    )
}

export default Team;