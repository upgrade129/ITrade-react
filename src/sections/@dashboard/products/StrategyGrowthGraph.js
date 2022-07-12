import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

StrategyGrowthGraphs.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function StrategyGrowthGraphs({ title, subheader, chartLabels, chartData, ...other }) {
  const theme = useTheme();
  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.grey[300],
      theme.palette.primary.main
    ],
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: 0,
              color: '#FF0000',
            },
            {
              from: 0,
              to: 100,
              color: '#00FF00',
            },
          ],
        },
        columnWidth: '60%',
      },
    },
    stroke: {
      width: 4
    },
    fill: {
      type: chartData.map((i) => i.fill),
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: 0.7,
        stops: [0, 70, 100],
      },
    },
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

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
