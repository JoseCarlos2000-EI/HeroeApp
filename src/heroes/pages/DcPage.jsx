import { HeroesLists } from "../components/HeroesLists"

export const DcPage = () => {
    return (
        <>
            <h1>Dc</h1>
            <HeroesLists publisher = { 'DC Comics' } ></HeroesLists>
        </>
    )
}
