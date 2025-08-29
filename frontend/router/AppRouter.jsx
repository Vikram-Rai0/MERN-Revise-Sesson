import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Parent from '../components/Props'
import Hooks from '../components/hooks'
import FirstPage from '../components/FirstPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage/>}></Route>
            <Route path="/props" element={<Parent />} />
            <Route path="/hooks" element={<Hooks />}></Route>
        </Routes>
    )
}
export default AppRouter
