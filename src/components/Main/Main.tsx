import React from "react";
import { Route, Switch } from "react-router-dom";

import { RandomPokemonView } from "./../RandomPokemonView/RandomPokemonView";
import { PokemonList } from "./../PokemonList/PokemonList";

import { MainStyled } from "./Main.css";

export const Main: React.FC = () => (
  <MainStyled>
    <Switch>
      <Route path="/" exact>
        <RandomPokemonView />
      </Route>
      <Route path="/list" exact>
        <PokemonList />
      </Route>
      <Route path="/favourite" exact>
        <div>Favourite</div>
      </Route>
    </Switch>
  </MainStyled>
);
