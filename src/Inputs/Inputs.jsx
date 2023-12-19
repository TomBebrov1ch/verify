import React from 'react'


const Inputs = (props) => {

    return (
        <div>
            <input className={props.Inputs} type="text" placeholder={`${props.placeholder}`} />
        </div>
    )
}

export default Inputs