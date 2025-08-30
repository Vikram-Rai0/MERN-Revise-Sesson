import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Parent from '../components/Props'
import Calculator from '../components/hooks/useState'
import FirstPage from '../components/FirstPage'
import Counter from '../components/hooks/useEffect'
import RenderCounter from '../components/hooks/useRef'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage />}></Route>
            <Route path="/props" element={<Parent />} />
            <Route path="/hooks" element={<Calculator />}></Route>
            <Route path="/useffect" element={<Counter />}></Route>
            <Route path="/useRef" element={<RenderCounter/>}></Route>
        </Routes>
    )
}
export default AppRouter
