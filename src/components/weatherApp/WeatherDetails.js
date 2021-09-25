import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles({
  component: {
    margin: 50,
  },
  row: {
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
  },
  value: {
    color: '#fff',
  },
  icon: {
    marginRight: 15,
    color: 'darkred',
  },
});

const WeatherDetails = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      {data ? (
        <React.Fragment>
          <Typography className={classes.row}>
            <LocationOnIcon className={classes.icon} />
            Location :{' '}
            <Box component="span" className={classes.value}>
              {data.name},{data.sys.country}{' '}
            </Box>
          </Typography>
          <Typography className={classes.row}>
            <SettingsBrightnessIcon className={classes.icon} />
            Temprature:{' '}
            <Box component="span" className={classes.value}>
              {data.main.temp}°C
            </Box>
          </Typography>
          <Typography className={classes.row}>
            <OpacityIcon className={classes.icon} />
            Humidity:{' '}
            <Box component="span" className={classes.value}>
              {data.main.humidity}%
            </Box>{' '}
          </Typography>
          <Typography className={classes.row}>
            <Brightness5Icon className={classes.icon} />
            Sunrise:{' '}
            <Box component="span" className={classes.value}>
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </Box>
          </Typography>
          <Typography className={classes.row}>
            <Brightness6Icon className={classes.icon} />
            Sunset:{' '}
            <Box component="span" className={classes.value}>
              {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </Box>
          </Typography>
          <Typography className={classes.row}>
            <DehazeIcon className={classes.icon} />
            Condition:{' '}
            <Box component="span" className={classes.value}>
              {data.weather[0].main}
            </Box>
          </Typography>
          <Typography className={classes.row}>
            <CloudIcon className={classes.icon} />
            Clouds:{' '}
            <Box component="span" className={classes.value}>
              {data.clouds.all}%
            </Box>
          </Typography>
        </React.Fragment>
      ) : (
        ''
      )}
    </Box>
  );
};

export default WeatherDetails;
