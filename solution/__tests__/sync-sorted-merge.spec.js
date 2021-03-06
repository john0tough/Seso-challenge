const sortFunction = require("./../sync-sorted-merge");
describe("sync-sorted-merge", () => {
  it("run", () => {
    const expected = [
      {
        date: new Date("2021-01-01T00:00:00Z"),
        msg: "frase 1",
      },
      {
        date: new Date("2021-01-02T00:00:00Z"),
        msg: "frase 2",
      },
      {
        date: new Date("2021-01-03T00:00:00Z"),
        msg: "frase 3",
      },
      {
        date: new Date("2021-01-04T00:00:00Z"),
        msg: "frase 4",
      },
      {
        date: new Date("2021-01-05T00:00:00Z"),
        msg: "frase 5",
      },
      {
        date: new Date("2021-01-06T00:00:00Z"),
        msg: "frase 6",
      },
      {
        date: new Date("2021-01-07T00:00:00Z"),
        msg: "frase 7",
      },
      {
        date: new Date("2021-01-08T00:00:00Z"),
        msg: "frase 8",
      },
      {
        date: new Date("2021-01-09T00:00:00Z"),
        msg: "frase 9",
      },

      {
        date: new Date("2021-01-20T00:00:00Z"),
        msg: "frase 20",
      },
    ];
    const source1 = [
      {
        date: new Date("2021-01-01T00:00:00Z"),
        msg: "frase 1",
      },
      {
        date: new Date("2021-01-03T00:00:00Z"),
        msg: "frase 3",
      },
      {
        date: new Date("2021-01-05T00:00:00Z"),
        msg: "frase 5",
      },
      {
        date: new Date("2021-01-07T00:00:00Z"),
        msg: "frase 7",
      },
      {
        date: new Date("2021-01-08T00:00:00Z"),
        msg: "frase 8",
      },
      {
        date: new Date("2021-01-09T00:00:00Z"),
        msg: "frase 9",
      },
    ];

    const source2 = [
      {
        date: new Date("2021-01-02T00:00:00Z"),
        msg: "frase 2",
      },
      {
        date: new Date("2021-01-04T00:00:00Z"),
        msg: "frase 4",
      },
      {
        date: new Date("2021-01-06T00:00:00Z"),
        msg: "frase 6",
      },
      {
        date: new Date("2021-01-20T00:00:00Z"),
        msg: "frase 20",
      },
    ];

    const logSources = [
      {
        pop: () => (source1.length > 0 ? source1.shift() : false),
      },
      {
        pop: () => (source2.length > 0 ? source2.shift() : false),
      },
    ];

    const printResult = [];
    const printer = {
      print: (value) => printResult.push(value),
      done: () => {},
    };

    sortFunction(logSources, printer);
    expect(printResult).toStrictEqual(expected);
  });
});
