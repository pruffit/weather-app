import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import LocationSearch from './LocationSearch.vue';
import { nextTick } from 'vue';

vi.mock('@shared/api/weatherApi', () => ({
  searchLocations: vi.fn((query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (query === 'Berlin') {
          resolve([{ id: 1, name: 'Berlin', country: 'Germany' }]);
        } else if (query === 'Paris') {
          resolve([{ id: 2, name: 'Paris', country: 'France' }]);
        } else {
          resolve([]);
        }
      }, 100);
    });
  }),
}));

describe('LocationSearch.vue - DOM tests', () => {
  it('displays the input field and the search button', () => {
    const wrapper = mount(LocationSearch);
    expect(wrapper.find('button').text()).toBe('Search');
  });

  it('does not show results with an empty query.', async () => {
    const wrapper = mount(LocationSearch);
    await wrapper.find('input').setValue('');
    await nextTick();
    expect(wrapper.find('ul').exists()).toBe(false);
  });

  it('shows the search results when you type "Berlin"', async () => {
    const wrapper = mount(LocationSearch);
    const input = wrapper.find('input');

    await input.setValue('Berlin');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await nextTick();

    const results = wrapper.find('ul');
    expect(results.exists()).toBe(true);
    expect(results.findAll('li')).toHaveLength(1);
    expect(results.find('li').text()).toBe('Berlin, Germany');
  });

  it('hides the results after selecting a location', async () => {
    const wrapper = mount(LocationSearch);
    const input = wrapper.find('input');

    await input.setValue('Berlin');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await nextTick();

    await wrapper.find('li').trigger('click');
    await nextTick();

    expect(wrapper.find('ul').exists()).toBe(false);
    expect(wrapper.emitted('location-selected')).toBeTruthy();
  });

  it('shows different results for different queries', async () => {
    const wrapper = mount(LocationSearch);
    const input = wrapper.find('input');

    await input.setValue('Berlin');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await nextTick();
    expect(wrapper.find('li').text()).toBe('Berlin, Germany');

    await input.setValue('Paris');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await nextTick();
    expect(wrapper.find('li').text()).toBe('Paris, France');
  });
});
