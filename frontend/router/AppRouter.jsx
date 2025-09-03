import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Parent from '../components/Props'
import Calculator from '../components/hooks/useState'
import FirstPage from '../components/FirstPage'
import Counter from '../components/hooks/useEffect'
import RenderCounter from '../components/hooks/useRef'
import ChatBox from '../components/hooks/useRef'
import ComponentA from '../components/hooks/useContext/ComponentA'
import ComponentC from '../components/hooks/useContext/ComponentC'
import ComponentB from '../components/hooks/useContext/ComponentB'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage />}></Route>
            <Route path="/props" element={<Parent />} />
            <Route path="/useState" element={<Calculator />}></Route>
            <Route path="/useffect" element={<Counter />}></Route>
            <Route path="/useRef" element={<RenderCounter />}></Route>
            <Route path="/useRef" element={<ChatBox />}></Route>
            <Route path="/useContext" element={<ComponentA />}></Route>
            {/* <Route path="/useContext" element={<ComponentB />}></Route>
            <Route path="/useContext" element={<ComponentC />}></Route> */}

        </Routes>
    )
}
export default AppRouter
