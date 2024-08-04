import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroeRoutes } from '../heroes/routes/HeroeRoutes'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/*' element={<HeroeRoutes></HeroeRoutes>}> </Route>

            </Routes>
        </BrowserRouter>
    )
}
