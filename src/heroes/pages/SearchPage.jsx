import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroeCard } from "../components/HeroeCards"
import queryString from 'query-string';
import { getHeroeByName } from "../helpers/heroes/GetHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const heroes = getHeroeByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>

            <input type="text" placeholder="Search a hero" className="form-control"
              name="searchText" autoComplete='false' value={searchText} onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          {
            !q ?
              <div className="alert alert-primary">
                Search a hero
              </div>
              : null
          }
          {
            heroes.length <= 0 ?
              <div className="alert alert-danger">
                No hero with {q}
              </div>
              :
              <div className="alert alert-primary">
                {
                  heroes.map(heroe => (
                    <HeroeCard key={heroe.id} {...heroe}></HeroeCard>
                  ))
                }
              </div>
          }

        </div>
      </div>
    </>
  )
}
