import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, makeStyles } from '@material-ui/core';
import { getWeatherData } from '../../actions/weatherAPI';
import WeatherDetails from './WeatherDetails';

const useStyles = makeStyles({
  input: {
    color: '#fff',
    paddingRight: 15,
  },
  formContainer: {
    padding: 10,
    background: '#445a6f',
  },
  button: {
    width: 150,
    height: 40,
    background: '#e67e22',
    color: '#fff',
    paddingTop: 5,
  },
});

const Form = () => {
  const classes = useStyles();
  const [data, useWeatherData] = useState();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [click, handleClick] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getWeatherData(city, country).then((res) => {
          useWeatherData(res.data);
          console.log(res.data);
        }));
    };
    getWeather();
    handleClick(false);
  }, [click]);

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };
  return (
    <React.Fragment>
      <Box className={classes.formContainer}>
        <TextField
          label="City"
          onChange={(e) => handleCityChange(e.target.value)}
          inputProps={{ className: classes.input }}
          className={classes.input}
        />
        <TextField
          label="Country"
          onChange={(e) => handleCountryChange(e.target.value)}
          inputProps={{ className: classes.input }}
          className={classes.input}
        />
        <Button variant="contained" className={classes.button} onClick={() => handleClick(true)}>
          Get Weather
        </Button>
      </Box>
      <WeatherDetails data={data} />
    </React.Fragment>
  );
};

export default Form;
