import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { Grid, Card, CardHeader, Container } from '@mui/material';
import StrategyCard from './StrategyCard'

// ----------------------------------------------------------------------

SubscribedStrategies.propTypes = {
  products: PropTypes.array.isRequired
};

export default function SubscribedStrategies({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
    {products.map((product) => (
      <Grid key={product.id} item xs={12} sm={6} md={3} lg={4}>
        <StrategyCard Link product={product} />
      </Grid>
    ))}
  </Grid>
  );
}
