import React from 'react'
import image from './movie.png'

function DefaultImage() {
    return (
        <div>
            <img 
                src={image}
                style={{width: '200px', margin: 'auto', display: 'block'}}
                alt='Default Image'
            />
        </div>
    )
}

export default DefaultImage
