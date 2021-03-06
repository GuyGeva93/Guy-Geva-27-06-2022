import { apiKey } from '@/assets/api-key';
import { storageService } from './storage-service';
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios');
const DEFAULT_URL = 'https://dataservice.accuweather.com';
const TELAVIV_CODE = '215854';

export const weatherService = {
  getCurrentWeather,
  getFiveDayForecast,
  autoComplete,
};

async function getCurrentWeather(locationCode) {
  try {
    const res = await axios.get(
      `${DEFAULT_URL}/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=false`
    );
    return res.data;
  } catch (e) {
    console.log('Error =>', e);
  }
}

async function getFiveDayForecast(
  locationCode = TELAVIV_CODE,
  locationName = 'Tel Aviv',
  fromFavorites = false
) {
  let locationFromStorage = storageService.loadFromStorage(
    locationName.toLowerCase()
  );
  if (!locationFromStorage || !locationFromStorage.length) {
    try {
      const res = await axios.get(
        `${DEFAULT_URL}/forecasts/v1/daily/5day/${locationCode}?apikey=${apiKey}&metric=true`
      );
      res.data.DailyForecasts[0].Id = uuidv4();
      res.data.DailyForecasts[0].LocationName = locationName;
      res.data.DailyForecasts[0].LocationCode = locationCode;
      if (!res.data.DailyForecasts[0].IsFavorite) {
        res.data.DailyForecasts[0].IsFavorite = false;
      }
      storageService.saveToStorage(
        locationName.toLowerCase(),
        res.data.DailyForecasts
      );
      return res.data.DailyForecasts;
    } catch (e) {
      console.log('Error =>', e);
    }
  }
  locationFromStorage[0].IsFavorite = fromFavorites;
  return locationFromStorage;
}
async function autoComplete(query) {
  if (!query) return;
  try {
    const res = await axios.get(
      `${DEFAULT_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );
    let locations = res.data.map((q) => {
      let city = {
        [q.Key]: q.LocalizedName,
      };
      return city;
    });
    return locations;
  } catch (e) {
    console.log('Error =>', e);
  }
}
