import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import App from './App.vue';
import { nextTick } from 'vue';

vi.mock('@shared/api/weatherApi', () => ({
  getWeatherForecast: vi.fn((lat, lon) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          latitude: lat,
          longitude: lon,
          timezone: 'Europe/Berlin',
          current_weather: {
            temperature: 18.5,
            time: '2024-04-02T14:30:00Z',
            weathercode: 0,
          },
          daily: {
            time: ['2024-04-02', '2024-04-03'],
            temperature_2m_max: [20.1, 19.8],
            temperature_2m_min: [12.3, 11.7],
            weathercode: [0, 1],
          },
          hourly: {
            time: ['2024-04-02T00:00', '2024-04-02T01:00'],
            temperature_2m: [15.2, 14.8],
          },
        });
      }, 100);
    });
  }),
  searchLocations: vi.fn(() =>
    Promise.resolve([
      { id: 1, name: 'Berlin', country: 'Germany', latitude: 52.52, longitude: 13.41 },
    ]),
  ),
}));

describe('App.vue - DOM tests', () => {
  it('displays the initial state', () => {
    const wrapper = mount(App);
    expect(wrapper.find('h1').text()).toBe('Weather Forecast');
    expect(wrapper.find('.current-weather').exists()).toBe(false);
  });
});
