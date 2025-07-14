import axios from 'axios';
import type { Location, WeatherResponse } from '@/shared/types/weather';

export const searchLocations = async (query: string): Promise<Location[]> => {
  try {
    const response = await axios.get<{ results?: Location[] }>(
      'https://geocoding-api.open-meteo.com/v1/search',
      { params: { name: query, count: 5, language: 'en' } },
    );
    return response.data.results || [];
  } catch (error) {
    console.error('Geocoding API error:', error);
    return [];
  }
};

export const getWeatherForecast = async (
  latitude: number,
  longitude: number,
): Promise<WeatherResponse | null> => {
  try {
    const response = await axios.get<WeatherResponse>('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude,
        longitude,
        hourly: 'temperature_2m',
        daily: 'weathercode,temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
        current_weather: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Weather API error:', error);
    return null;
  }
};
