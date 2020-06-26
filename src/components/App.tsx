import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NotFound from './NotFound';
import Home from './Home';
import PokemonsIndex from '../containers/pokemons/index';
import PokemonsDetail from '../containers/pokemons/detail';
import MyPokemonsIndex from '../containers/my_pokemons/index';
import Loader from '../containers/common/loader';
import Snackbar from './common/Snackbar';
import { AppPropsMappedFromState, AppPropsMappedFromDispatch } from '../containers/app';

const styles = (theme: Theme): StyleRules => ({
  appContainer: {
    padding: theme.spacing(5),
  },
});

type AppProps = AppPropsMappedFromState & AppPropsMappedFromDispatch & WithStyles<typeof styles>;

export const ROUTES = {
  HOME: '/',
  POKEDEX: '/pokemons',
  POKEMON_DETAIL: '/pokemons/:id',
  MY_POKEMONS: '/my_pokemons',
};

const App: React.FC<AppProps> = ({ fetchPokemons, classes }) => {
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <CssBaseline />
      <div className={classes.appContainer}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.POKEDEX} exact component={PokemonsIndex} />
          <Route path={ROUTES.POKEMON_DETAIL} exact component={PokemonsDetail} />
          <Route path={ROUTES.MY_POKEMONS} exact component={MyPokemonsIndex} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
