import { centsToDollars, centsToDollarsString, dollarsToCents } from '../Conversion';

describe('centsToDollars()', () => {
  it.each([
    { i: 1234, o: 12.34 },
    { i: 1200, o: 12 },
    { i: 0, o: 0 },
    { i: -2020, o: 0 },
    { i: NaN, o: 0 },
    { i: undefined, o: 0 },
    { i: true, o: 0 },
    { i: false, o: 0 },
    { i: '5432', o: 54.32 },
    { i: '', o: 0 },
    { i: '   ', o: 0 },
    { i: '-2020', o: 0 },
    { i: '6543.21', o: 65.43 },
    { i: 'abc', o: 0 },
    { i: null, o: 0 }
  ])(`returns correct centsToDollars(i) with %p`, ({ i, o }) => {
    expect(centsToDollars(i)).toBe(o)
  })
  it('returned expected result compared to float providing a bad result', () => {
    expect((22.2 + 11.1) / 100).not.toEqual(0.33)
    expect(centsToDollars(22.2 + 11.1)).toEqual(0.33)
  })
})

describe('centsToDollarsString()', () => {
  it.each([
    { i: 1234, o: '12.34' },
    { i: 1200, o: '12.00' },
    { i: 0, o: '0.00' },
    { i: -2020, o: '0.00' },
    { i: NaN, o: '0.00' },
    { i: undefined, o: '0.00' },
    { i: true, o: '0.00' },
    { i: false, o: '0.00' },
    { i: '5432', o: '54.32' },
    { i: '', o: '0.00' },
    { i: '   ', o: '0.00' },
    { i: '-2020', o: '0.00' },
    { i: '6543.21', o: '65.43' },
    { i: 'abc', o: '0.00' },
    { i: null, o: '0.00' }
  ])(`returns correct centsToDollarsString(i) with %p`, ({ i, o }) => {
    expect(centsToDollarsString(i)).toBe(o)
  })
})

describe('dollarsToCents()', () => {
  it.each([
    { i: 0.001, o: 0 },
    { i: 12.34, o: 1234 },
    { i: 12, o: 1200 },
    { i: 0, o: 0 },
    { i: -2020, o: 0 },
    { i: NaN, o: 0 },
    { i: undefined, o: 0 },
    { i: true, o: 0 },
    { i: false, o: 0 },
    { i: '54.32', o: 5432 },
    { i: '', o: 0 },
    { i: '   ', o: 0 },
    { i: '-2020', o: 0 },
    { i: '54', o: 5400 },
    { i: 'abc', o: 0 },
    { i: null, o: 0 },
  ])(`returns correct centsToDollars(i) with %p`, ({ i, o }) => {
    expect(dollarsToCents(i)).toBe(o)
  })
  it('returned expected result compared to float providing a bad result', () => {
    expect(16.58 * 100).not.toEqual(1658)
    expect(dollarsToCents(16.58)).toEqual(1658)
    expect((0.4 + 0.2) * 100).not.toEqual(60)
    expect(dollarsToCents(0.4 + 0.2)).toEqual(60)
    expect(8.7 * 100).not.toEqual(870)
    expect(dollarsToCents(8.7)).toEqual(870)
    expect((84.65 - 24.65) * 100).not.toEqual(6000)
    expect(dollarsToCents(84.65 - 24.65)).toEqual(6000)
  })
})
