import React from 'react'
import { Link } from 'react-router-dom'
const FirstPage = () => {
    return (
        <div className='flex gap-4'>
            <Link to="/props"> <button className='h-10 w-20 border-1 rounded-md'>Props</button></Link>
            <Link to="/usestate"><button className='h-10 w-20 border-1 rounded-md'>useState</button></Link>
            <Link to="/useffect"><button className='h-10 w-20 border-1 rounded-md'>useEffect</button></Link>
            <Link to="/useRef"><button className='h-10 w-20 border-1 rounded-md'>useRef</button></Link>
            <Link to="/useContext"><button className='h-10 w-20 border-1 rounded-md'>useContext</button></Link>
            <Link to="/toggleColor"><button className='h-10 w-20 border-1 rounded-md'>ToggleColor</button></Link>

        </div>
    )
}

export default FirstPage
