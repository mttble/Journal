import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = () => {
    const [categories, setCategories] = useState(['Food', 'Gaming', 'Coding', 'Other'])
    return (
        <>
            <h3>Please select a category</h3>
            <ul>
                {categories.map(cat => (
                    <li key={cat}>
                        <Link to={`/entry/new/${cat}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategorySelection