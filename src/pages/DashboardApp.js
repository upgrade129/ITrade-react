import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import { SubscribedStrategies } from '../sections/@dashboard/dashboard';

import PRODUCTS from '../_mock/products';
import DashboardGraphData from '../_mock/dashboardGraph';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  // const dateAndTime = DashboardGraphData.result.map((i) => ( new Date(i.time) ) )
  const dateAndTime = DashboardGraphData.result.map((i) => (i.time))
  const closeData = DashboardGraphData.result.map((i) => ( i.close ))

  console.log("date", dateAndTime)
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Profit/Loss" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Strategies subscribed" total={2} color="error" icon={'ant-design:bug-filled'} />
          </Grid> */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Strategies subscribed" total={2} color="error" icon={'ant-design:apple-filled'} />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Items sold" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid> */}

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Combined Equity curve of all strategies"
              subheader="(+43%) than last year"
              chartLabels={
                dateAndTime
              //   [
              //   '01/01/2022',
              //   '02/01/2022',
              //   '03/01/2022',
              //   '04/01/2022',
              //   '05/01/2022',
              //   '06/01/2022',
              //   '07/01/2022',
              //   '08/01/2022',
              //   '09/01/2022',
              //   '10/01/2022',
              //   '11/01/2022',
              // ]
            }
              chartData={[
                // {
                //   name: 'Profit',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                // {
                //   name: 'ITrade',
                //   type: 'area',
                //   fill: 'gradient',
                //   data: [32010, 32310, 32410, 33710, 33810, 34010, 34210, 34310, 34610, 34710, 35510],
                // },
                {
                  name: 'NIFTY',
                  type: 'line',
                  fill: 'solid',
                  // data: [31010, 31310, 31410, 32710, 31810, 32010, 33210, 32310, 34010, 32710, 34510],
                  data: closeData
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}
        </Grid>
        <Grid spacing={3} xs={12} sm={6} md={3} >
          
        <Container>
        <Typography variant="h4">
          Subscribed Strategies
        </Typography>

        <SubscribedStrategies products={PRODUCTS} />
       
      </Container>


          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
