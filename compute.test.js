const { compute, computeTwoDays } = require("./compute");

describe("Object of dates and values sent", () => {
  test("returns dictionary", () => {
    const data = compute({
      "2019-01-10": 10,
      "2019-01-11": 20,
      "2019-01-13": 10,
    });

    expect(data).toMatchObject({
      "2019-01-10": 10,
      "2019-01-11": 20,
      "2019-01-12": 15,
      "2019-01-13": 10,
    });
  });
  test("Throws error if empty object is passed", () => {
    expect(() => {
      compute({});
    }).toThrow();
  });
});

describe("Dates between 2, function test", () => {
  test("Returns dates and values for one day difference", () => {
    const data = computeTwoDays(["2019-01-10", 10], ["2019-01-12", 30]);
    expect(data).toMatchObject({
      "2019-01-11": 20,
      "2019-01-12": 30,
    });
  });
  test("Returns dates and values for many days difference", () => {
    const data = computeTwoDays(["2019-01-10", 10], ["2019-01-14", 30]);
    expect(data).toMatchObject({
      "2019-01-11": 15,
      "2019-01-12": 20,
      "2019-01-13": 25,
      "2019-01-14": 30,
    });
  });
  test("Throws error if invalid date format sent", () => {
    expect(() => {
      computeTwoDays(["2211-11", 34], ["2019-01-11", 20]);
    }).toThrow();
  });
  test("Throws error if invalid value sent", () => {
    expect(() => {
      computeTwoDays(["2001-11-01", "XAC"], ["2001-12-12", 34]);
    }).toThrow();
  });
  test("Throws error if empty value sent", () => {
    expect(() => {
      computeTwoDays(["2001-11-01", 45], []);
    }).toThrow();
  });
});
