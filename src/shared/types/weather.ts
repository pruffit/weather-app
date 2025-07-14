export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export interface CurrentWeather {
  temperature: number;
  time: string;
  weathercode: number;
}

export interface HourlyForecast {
  time: string[];
  temperature_2m: number[];
}

export interface DailyForecast {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: CurrentWeather;
  daily: DailyForecast;
  hourly: HourlyForecast;
}
