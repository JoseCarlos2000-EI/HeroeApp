import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"
import { HeroesPage } from "../pages/HeroesPage"
import { NavBar } from "../../ui/components/NavBar"

export const HeroeRoutes = () => {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
        <Route path="dc" element = {<DcPage></DcPage>}></Route>
        <Route path="marvel" element = {<MarvelPage></MarvelPage>}></Route>
        <Route path="search" element = {<SearchPage></SearchPage>}></Route>
        <Route path="heroe/:id" element = {<HeroesPage></HeroesPage>}></Route>
        <Route path='/' element = { <Navigate to = 'dc'></Navigate> }></Route>
    </Routes>
    </>
  )
}
