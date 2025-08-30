import React from 'react'
import { Link } from 'react-router-dom'
const FirstPage = () => {
    return (
        <div className='flex gap-4'>
            <Link to="/props"> <button className='h-10 w-20 border-1 rounded-md'>Props</button></Link>
            <Link to="/usestate"><button className='h-10 w-20 border-1 rounded-md'>useEffect</button></Link>
            <Link to="/useeffect"><button className='h-10 w-20 border-1 rounded-md'>useEffect</button></Link>
        </div>
    )
}

export default FirstPage
