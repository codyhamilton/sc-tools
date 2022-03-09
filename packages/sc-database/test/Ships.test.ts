import { Ships } from '../src';

describe("Ships database", () => {
  it('finds a mustang with "must"', () => {
    const result = Ships.find("must");
    expect(result[0].item.name).toBe("Mustang Alpha")
  }),

  xit('finds an aurora with "ae"', () => {
    const result = Ships.find("ae");
    expect(result[0].item.name).toBe("Aurora ES")
  }),

  it('finds an aurora with "aes"', () => {
    const result = Ships.find("aes");
    expect(result[0].item.name).toBe("Aurora ES")
  }),

  it('won\'t find any connnies', () => {
    const result = Ships.find("Connie");
    expect(result[0].item.name).not.toBe("Constellation Andromeda")
  })
});
