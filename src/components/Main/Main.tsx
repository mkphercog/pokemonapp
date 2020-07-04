import React from "react";
import { Route, Switch } from "react-router-dom";

import { RandomPokemonView } from "./../RandomPokemonView/RandomPokemonView";

import { MainStyled } from "./Main.css";

export const Main: React.FC = () => (
  <MainStyled>
    <Switch>
      <Route path="/" exact>
        <RandomPokemonView />
      </Route>
      <Route path="/list" exact>
        <div>LIST</div>
      </Route>
      <Route path="/favourite" exact>
        <div>Favourite</div>
      </Route>
    </Switch>
  </MainStyled>
);
