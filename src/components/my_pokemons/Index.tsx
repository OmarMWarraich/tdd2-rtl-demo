import React from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/my_pokemons/index';
import Breadcrumbs from '../common/Breadcrumbs';

const styles = (theme: Theme): StyleRules => ({
  container: {
    textAlign: 'center',
  },
  cards: {
    marginTop: theme.spacing(20),
  },
  notification: {
    fontSize: 50,
    margin: theme.spacing(5),
  },
});

type IndexProps = IndexPropsMappedFromState &
  IndexPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Index: React.FC<IndexProps> = ({ myPokemons, classes }) => (
  <div className={classes.container}>
    <Breadcrumbs />
    <Typography variant="h4">My Pokemons</Typography>
    <Grid container justify="center" className={classes.cards}>
      {myPokemons.length === 0 ? (
        <Grid item xs={12} className={classes.card}>
          <NotificationImportant className={classes.notification} />
          <Typography variant="h4">Please add pokemons !</Typography>
        </Grid>
      ) : (
        myPokemons.map((pokemon) => {
          return (
            <Grid item className={classes.card} key={pokemon.name}>
              <Card>
                <CardActionArea>
                  <img className={classes.image} src={pokemon.sprites.front_default!} />
                  <CardContent>
                    <Typography variant="h5">{pokemon.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  </div>
);

export default withStyles(styles)(Index);
