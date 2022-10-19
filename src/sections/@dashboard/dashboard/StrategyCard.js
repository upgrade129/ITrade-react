import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';
import { AppWebsiteVisits } from '../app';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

StrategyCard.propTypes = {
  product: PropTypes.object,
};

export default function StrategyCard({ product }) {

    const chartData = [
        {
          name: 'AVG',
          type: 'line',
          fill: 'solid',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        }
      ]
    
      const chartLabels=[
        '01/01/2022',
        '02/01/2022',
        '03/01/2022',
        '04/01/2022',
        '05/01/2022',
        '06/01/2022',
        '07/01/2022',
        '08/01/2022',
        '09/01/2022',
        '10/01/2022',
        '11/01/2022',
      ]

    const chartOptions = merge(BaseOptionChart(), {
        plotOptions: { bar: { columnWidth: '16%' } },
        fill: { type: chartData.map((i) => i.fill) },
        labels: chartLabels,
        xaxis: { type: 'datetime' },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: (y) => {
              if (typeof y !== 'undefined') {
                return `${y.toFixed(0)} Percent`;
              }
              return y;
            },
          },
        },
      });

  const { name, cover, price, colors, status, priceSale } = product;

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card onClick={() => navigate("/dashboard/ourStrategy")}>

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={200} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          
          <Typography variant="subtitle2" noWrap>
            ROI  -  15%
          </Typography>
          
            {/* <Button onClick={handleClickOpen}>Details</Button> */}  
            <Typography variant="subtitle2" noWrap sx={{
                color: 'green',
              }}>
            PROFIT
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
