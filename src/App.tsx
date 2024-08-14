import React, { useEffect, useState } from 'react';
import Input from './Components/Input';
import Card from './Components/Card';
import { useQuery } from 'react-query';
import { api } from './service/api';
import Loader from './Components/Loader';
import { IMainData } from './Components/Card/type';
import { icons } from './resources/Icons/weathericon';
import { GlobalStyle } from './GlobalStyle';
import { ErrorMesssage } from './styles/style';
function App() {
  const [value, setValue] = useState('');
  const [mainData, setMainData] = useState<IMainData>({} as IMainData);
  const [bgColor, setBgColor] = useState<string>('#212121');

  const fetchWeather = async (city: string) => {
    return api.get('/forecast.json', {
      params: {
        q: city,
        days: 1,
      },
    });
  };

  const { data, isFetching, refetch, error } = useQuery('weather', async () => {
    return fetchWeather(value);
  }, {
    enabled: false,
    onSuccess: (response) => {
      const { location, current, forecast } = response.data;
      //location
      const { name, localtime } = location;
      //current
      const { temp_c, is_day, condition } = current;
      //forecast
      const { forecastday } = forecast;
      const { date, day, astro } = forecastday[0];
      const { maxtemp_c, mintemp_c, condition: conditionForecast, maxwind_kph } = day;
      const { sunrise, sunset } = astro;
      getDayPeriod(localtime);
      setMainData({
        data: {
          current: {
            city: name,
            tempC: temp_c,
            localtime: localtime,
            is_day: is_day,
            image: condition.text,
          },
          forecast: {
            date: date,
            maxTemp: maxtemp_c,
            minTemp: mintemp_c,
            condition: conditionForecast.text,
            maxWindSpeed: maxwind_kph,
            sunrise: sunrise,
            sunset: sunset,
          }
        }
      });
    }
  }) as ({ data: any, isFetching: boolean, refetch: () => void, error: any });
  const handleClick = () => {
    refetch();
  }
  const getDayPeriod = (localtime: string = ''): void => {
    const date = new Date(localtime);
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      setBgColor('linear-gradient(62deg, rgba(242,234,119,1) 2%, rgba(242,188,121,1) 97%);')
    } else if (hour >= 12 && hour < 17) {
      setBgColor('linear-gradient(62deg, rgba(242,163,94,1) 2%, rgba(89,63,80,0.9) 97%);'); // Tarde (12:00 - 16:59)
    } else {
      setBgColor('linear-gradient(62deg, rgba(25,59,89,1) 2%, rgba(2,7,13,1) 97%);') // Noite (17:00 - 4:59)
    }
  }

  if (isFetching) {
    return (
      <>
        <GlobalStyle bgColor={bgColor} />
        <Loader />
      </>
    )
  }
  if(error){
    console.log(error)
  }


  return (
    <>
      <GlobalStyle bgColor={bgColor} />
      {error?.message && <ErrorMesssage>{error.message}</ErrorMesssage>}
      <Input onChange={(e) => setValue(e.target.value)} onClick={handleClick} />
      {mainData.data && <Card data={mainData.data} />}
    </>
  );
}

export default App;
