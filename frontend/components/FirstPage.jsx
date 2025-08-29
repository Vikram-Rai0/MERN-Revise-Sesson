import React from 'react'
import { Link } from 'react-router-dom'
const FirstPage = () => {
    return (
        <div>
            <Link to="/props"> <button>Props</button></Link>
            <Link to="/hooks"><button>Hooks</button></Link>
        </div>
    )
}

export default FirstPage
