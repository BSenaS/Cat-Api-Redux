import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import FavoritesRandom from "./components/FavoritesRandom";
import Random from "./components/Random";


function App() {

  return (
    <>
    <div className='genel-wrapper'>
      <nav>
      <NavLink to="/" exact>
        Filmler
      </NavLink> 
      <NavLink to="/favorites">
        Favorites
      </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Random/>
        </Route>
        <Route patch="/favorites">
          <FavoritesRandom/>
        </Route>
      </Switch>
    </div>
    </>
  )
}

export default App
