import React from 'react'


const ShowEntry = ({ entry }) => {
    return (
        <>
            <h5>{entry.content}</h5>
            <p>Posted in {entry.category}</p>
        </>
    )
}

export default ShowEntry