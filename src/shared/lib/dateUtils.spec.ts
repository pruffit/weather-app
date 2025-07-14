import { describe, it, expect } from 'vitest';
import { formatLocalTime, formatDailyDate, getWeatherIcon } from './dateUtils';

describe('dateUtils', () => {
  it('formats ISO time to local time string', () => {
    const isoString = '2024-04-02T14:30:00Z';
    const formatted = formatLocalTime(isoString);
    expect(formatted).toMatch(/^\d{2}:\d{2}$/);
  });

  it('returns correct weather icons', () => {
    expect(getWeatherIcon(0)).toBe('☀️'); // Clear sky
    expect(getWeatherIcon(61)).toBe('🌧️'); // Rain
    expect(getWeatherIcon(80)).toBe('🌧️'); // Rain showers
    expect(getWeatherIcon(999)).toBe('❓'); // Unknown code
  });
});
