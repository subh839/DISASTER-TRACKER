import React from 'react'
import Notes from './Notes'

const Detail = () => {
    let style={
        color:'Black',
        backgroundColor:'#CCD1E4',
        padding:'2rem'
    }
    
    return (
        <div className="container" style={style}>
            <Notes/>
        </div>
    )
}

export default Detail
