import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FacebookLogin from '../facebook/facebookLogin';

import Orders from '../orders/Orders';

const DashBoardContent = () => (
  <>
        <Grid container spacing={3}>
          <Link href="#" style={{ marginBottom: '2rem' }}
                onClick={() => window.open('https://analytics.google.com/analytics/web/?pli=1#/report/visitors-overview/a125067015w245339559p228175211/', '_blank')}>
              Google Analytics
          </Link>
            <div className="m-l-lg">
                <FacebookLogin/>
            </div>
        </Grid>
      <Orders/>
  </>
);

export default DashBoardContent;
