import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Chart from './chart';
import Deposits from './deposits';
import Orders1 from './orders1';
import { useStyles } from './styles';

const DashBoardContent = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
        <Grid container spacing={3}>
          <Link href="#" style={{ marginBottom: '2rem' }}
                onClick={() => window.open('https://analytics.google.com/analytics/web/?pli=1#/report/visitors-overview/a125067015w245339559p228175211/', '_blank')}>
              Google Analytics
          </Link>
        </Grid>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <Chart />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <Deposits />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Orders1 />
                </Paper>
            </Grid>
        </Grid>
    </>
  );
};

export default DashBoardContent;
