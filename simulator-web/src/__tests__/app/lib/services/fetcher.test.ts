import { fetcher } from '@/app/lib/services/fetcher';

describe('Fetcher', () => {
  const globalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = globalFetch;
  });

  it('invokes the real fetch with a route', async () => {
    await fetcher('https://example.com');

    expect(global.fetch).toHaveBeenCalledWith('https://example.com');
  });

  it('invokes the real fetch with a route and configuration', async () => {
    await fetcher('https://example.com/foo', { method: 'GET' });

    expect(global.fetch).toHaveBeenCalledWith('https://example.com/foo', {
      method: 'GET',
    });
  });
});
