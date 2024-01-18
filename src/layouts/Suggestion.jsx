import React from 'react'

export default function Suggestion({ text, subtext }) {
    return (
        <div className='suggestion'>
            <h4>{text}</h4>
            <p>{subtext}</p>
        </div>
    )
}
