// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Table, Stack, TableCell, TableBody, TableRow, TableContainer, Grid, Container, Typography, Button } from '@mui/material';

// sections
import { AppWebsiteVisits } from '../sections/@dashboard/app';
import { UserListHead } from '../sections/@dashboard/user';
import StrategyGrowthGraphs from '../sections/@dashboard/products/StrategyGrowthGraph';

// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'instrument', label: 'Instrument', alignRight: false },
  { id: 'Capital_requirement' , label: 'Capital Requirement', alignRight: false },
  { id: 'ROI', label: 'ROI', alignRight: false },
  { id: 'Max_draw_down', label: 'Max Draw Down', alignRight: false },
  { id: 'Time_to_draw_down', label: 'Time To Draw Down', alignRight: false },
  { id: 'Expectancy', label: 'Expectancy', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];

export default function Strategy() {
  const theme = useTheme();

  return (
    <Page title="Strategies">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Strategy 1
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
          <Card>
          <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <UserListHead
                    headLabel={TABLE_HEAD}
                  />
                  <TableBody>
                    <TableRow
                      tabIndex={-1}
                      role="checkbox"
                    >
                      <TableCell component="th" scope="row" padding="normal">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2" noWrap>
                          Camaflouge
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">₹ 2,47,000</TableCell>
                      <TableCell align="left">
                      <Label variant="ghost" color='success'>
                      42.82 %
                        </Label>
                      </TableCell>
                      <TableCell align="left">32.52 %</TableCell>
                      <TableCell align="left">10 days</TableCell>
                      <TableCell align="left">0.62</TableCell>
                      <TableCell align="left">
                        <Button variant='contained' color='success' sx={{ mr:1 }} >
                          Execute
                        </Button>
                        <Button variant='contained' color='warning' sx={{ mr:1 }} >
                          Pause
                        </Button>
                        <Button variant='contained' color='error' sx={{ mr:1 }} >
                          Stop
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              </Scrollbar>
          </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
          <AppWebsiteVisits
              title="Equity curve for Camaflouge"
              // subheader="(+43%) than last year"
              chartLabels={[
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
              ]}
              chartData={[
                {
                  name: 'ITrade',
                  type: 'area',
                  fill: 'gradient',
                  data: [32010, 32310, 32410, 33710, 33810, 34010, 34210, 34310, 34610, 34710, 35510],
                },
                {
                  name: 'Strategy - Camaflouge',
                  type: 'line',
                  fill: 'solid',
                  data: [31010, 31310, 31410, 32710, 31810, 32010, 33210, 32310, 34010, 32710, 34510],
                },
              ]}
            />
            {/* <StrategyGrowthGraphs
              title="Growth graph"
              // subheader="(+43%) than last year"
              chartLabels={[
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
              ]}
              chartData={[
                {
                  name: 'Camaflouge',
                  type: 'area',
                  fill: 'gradient',
                  data: [32010, 32310, 32410, 33710, 33810, 34010, 34210, 34310, 34610, 34710, 35510],
                },
                {
                  name: 'NIFTY',
                  type: 'line',
                  fill: 'solid',
                  data: [31010, 31310, 31410, 32710, 31810, 32010, 33210, 32310, 34010, 32710, 34510],
                },
              ]}
            />  */}
          </Grid>
          {/* <Grid item xs={12} md={6} lg={12}>
            
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
