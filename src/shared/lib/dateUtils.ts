export const formatLocalTime = (isoString: string): string => {
  try {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  } catch (e) {
    return '--:--';
  }
};

export const formatDailyDate = (isoString: string): string => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString([], {
      weekday: 'short',
      day: 'numeric',
    });
  } catch (e) {
    return '--';
  }
};

export const formatHourlyTime = (isoString: string): string => {
  try {
    const date = new Date(isoString);
    return date
      .toLocaleTimeString([], {
        hour: 'numeric',
        hour12: true,
      })
      .replace(' ', '');
  } catch (e) {
    return '--';
  }
};

export const getWeatherIcon = (code: number): string => {
  const weatherIcons: Record<number, string> = {
    0: '☀️', // Clear sky
    1: '🌤️', // Mainly clear
    2: '⛅', // Partly cloudy
    3: '☁️', // Overcast
    45: '🌫️', // Fog
    48: '🌫️', // Depositing rime fog
    51: '🌦️', // Drizzle: Light
    53: '🌦️', // Drizzle: Moderate
    55: '🌧️', // Drizzle: Dense intensity
    56: '🌧️', // Freezing Drizzle: Light
    57: '🌧️', // Freezing Drizzle: Dense intensity
    61: '🌧️', // Rain: Slight
    63: '🌧️', // Rain: Moderate
    65: '🌧️', // Rain: Heavy intensity
    66: '🌧️', // Freezing Rain: Light
    67: '🌧️', // Freezing Rain: Heavy intensity
    71: '❄️', // Snow fall: Slight
    73: '❄️', // Snow fall: Moderate
    75: '❄️', // Snow fall: Heavy intensity
    77: '❄️', // Snow grains
    80: '🌧️', // Rain showers: Slight
    81: '🌧️', // Rain showers: Moderate
    82: '🌧️', // Rain showers: Violent
    85: '❄️', // Snow showers: Slight
    86: '❄️', // Snow showers: Heavy
    95: '⛈️', // Thunderstorm: Slight or moderate
    96: '⛈️', // Thunderstorm with slight hail
    99: '⛈️', // Thunderstorm with heavy hail
  };

  return weatherIcons[code] || '❓';
};
