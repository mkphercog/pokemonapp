import React from "react";
import { Route, Switch } from "react-router-dom";

import { RandomPokemonView } from "./../RandomPokemonView/RandomPokemonView";

import { MainStyled } from "./Main.css";

export const Main: React.FC<MainProps> = () => {
  return (
    <MainStyled>
      <Switch>
        <Route path="/" exact>
          <RandomPokemonView />
        </Route>
        <Route path="/list" exact>
          <div>HAHHAHHHHAHHHHAHHHHAHHA</div>
        </Route>
      </Switch>
    </MainStyled>
  );
};

interface MainProps {}
