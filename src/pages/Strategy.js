// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Table, Stack, TableCell, TableBody, TableRow, TableContainer, Grid, Container, Typography, Button } from '@mui/material';

// sections
import { UserListHead } from '../sections/@dashboard/user';
import StrategyGrowthGraphs from '../sections/@dashboard/products/StrategyGrowthGraph';

// components
import Page from '../components/Page';
import Label from '../components/Label';



// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'instrument', label: 'Instrument', alignRight: false },
  { id: 'minCap', label: 'Min Capital', alignRight: false },
  { id: 'hitRatio', label: 'Hit Ratio', alignRight: false },
  { id: 'risk', label: 'Risk', alignRight: false },
  { id: 'roi', label: 'ROI', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];

export default function Strategy() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Strategy 1
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
          <Card>
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
                            Strategy Name
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">₹ 2,47,000</TableCell>
                      <TableCell align="left">53.55 %</TableCell>
                      <TableCell align="left">
                      <Label variant="ghost" color='error'>
                      42.82 %
                        </Label>
                      </TableCell>
                      <TableCell align="left">
                        <Label variant="ghost" color='success'>
                        312.75 %
                        </Label>
                      </TableCell>
                      <TableCell align="center">
                        <Button variant='contained' color='success' fullWidth>
                          Execute
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
          </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <StrategyGrowthGraphs
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
                  name: 'P/L',
                  type: 'bar',
                  fill: 'gradient',
                  data: [44, 55, -41, 67, 22,-43, -21, 41, 56, -27, 43],
                },
                {
                  name: 'ROI',
                  type: 'line',
                  fill: 'solid',
                  data: [24, 35, -25, 37, 12,-23, -11, 27, 36, -17, 33],
                },
              ]}
            /> 
          </Grid>
          {/* <Grid item xs={12} md={6} lg={12}>
            
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
