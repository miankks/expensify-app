import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1c481819c139ce4a95360812e84918a5';

export const getWeatherData = async (city, country) => {
  return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
};
