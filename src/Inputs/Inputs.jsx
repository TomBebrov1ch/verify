import React from 'react'


const Inputs = (props) => {
    return (
        <div>
            <input className={props.className} type="text" placeholder={`${props.placeholder}`} />
        </div>
    )
}

export default Inputs