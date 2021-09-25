import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles({
  component: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    width: '65%',
    margin: '0 auto',
  },
  leftContainer: {
    backgroundImage: `url(/images/sun-rays-cloudy-sky.jpg)`,
    height: '80%',
    width: '30%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
  },
  rightContainer: {
    background: 'linear-gradient(to right, #e74c3c, #e67e22)',
    height: '80%',
    width: '70%',
    borderRadius: '0 20px 20px 0',
  },
});

const Weather = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.component}>
        <Box className={classes.leftContainer}></Box>
        <Box className={classes.rightContainer}>
          <Form />
        </Box>
      </Box>
    </div>
  );
};

export default Weather;
