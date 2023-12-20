import React from 'react'

const Pass = (props) => {
    return (
        <div>
            <input className={props.className} type="password" placeholder={`${props.placeholder}`} />
        </div>
    )
}

export default Pass