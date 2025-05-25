import { shortenUrl } from './urlShortener';

describe('shortenUrl', () => {
  it('can shorten url.', () => {
    const input = 'https://www.amazon.co.jp/x/dp/B0CLN41FTG/y';
    const expected = 'https://www.amazon.co.jp/dp/B0CLN41FTG/';
    expect(shortenUrl(input)).toBe(expected);
  });

  it('cannot shorten url when it is invalid url.', () => {
    const input = 'invalid-url';
    expect(shortenUrl(input)).toBeNull();
  });
});
