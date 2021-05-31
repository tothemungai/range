const rangeLoop = require("../rangeLoop");
describe("Range loop", () => {
  it("Should throw an error on invalid args", () => {
    try {
      rangeLoop("one", "two", "3").next();
    } catch (error) {
      expect(error).toBeDefined();
    }
    try {
      rangeLoop(1, "two").next();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it("Should iterate properly, with and without step", () => {
    //simple
    const mockFn = jest.fn();
    for (let i of rangeLoop(1, 5)) mockFn();
    expect(mockFn).toBeCalledTimes(5);
    //with step
    const mockFn2 = jest.fn();
    for (let i of rangeLoop(1, 6, 2)) mockFn2();
    expect(mockFn2).toBeCalledTimes(3);
    //with options
    const mockFn3 = jest.fn();
    for (let i of rangeLoop(1, 6, 1, { includeStart: true, includeEnd: false }))
      mockFn3(i);
    expect(mockFn3).toBeCalledTimes(5);
    expect(mockFn3).toBeCalledWith(1);
    expect(mockFn3).not.toBeCalledWith(6);
  });
  it("Should spread to the ranges contents", () => {
    expect([
      ...rangeLoop(1, 2, 1, { includeStart: true, includeEnd: true }),
    ]).toEqual([1, 2]);
  });
  it("Should be callable with partial options", () => {
    expect([...rangeLoop(1, 3, 1, { includeEnd: false })]).toEqual([1, 2]);
  });
});
