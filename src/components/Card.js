import React from 'react'

function Card({src, title}) {
    return (
        <div>
            <img className="rounded-2xl cursor-pointer" src={src}/>
            <div>
                <h3 className='text-text-primary font-bold mt-2 cursor-pointer'>{title}</h3>
            </div>
        </div>
    )
}

export default Card
