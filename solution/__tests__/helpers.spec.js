const {
  sortLogManagerList,
  insertNewLogEntryInLogManager,
  mapLogEntryToLogManagerItem,
} = require("./../helpers");

describe("helpers", () => {
  it("sort logEntry in descendant order", () => {
    const expected = [
      {
        curr: {
          date: new Date("2021-01-31T00:00:00Z"),
          msg: "frase 2",
        },
        logIndex: 2,
      },
      {
        curr: {
          date: new Date("2021-01-11T00:00:00Z"),
          msg: "frase 3",
        },
        logIndex: 3,
      },
      {
        curr: {
          date: new Date("2021-01-03T00:00:00Z"),
          msg: "frase 4",
        },
        logIndex: 4,
      },
      {
        curr: {
          date: new Date("2021-01-01T00:00:00Z"),
          msg: "frase 1",
        },
        logIndex: 1,
      },
    ];
    const result = [
      {
        curr: {
          date: new Date("2021-01-01T00:00:00Z"),
          msg: "frase 1",
        },
        logIndex: 1,
      },
      {
        curr: {
          date: new Date("2021-01-31T00:00:00Z"),
          msg: "frase 2",
        },
        logIndex: 2,
      },
      {
        curr: {
          date: new Date("2021-01-11T00:00:00Z"),
          msg: "frase 3",
        },
        logIndex: 3,
      },
      {
        curr: {
          date: new Date("2021-01-03T00:00:00Z"),
          msg: "frase 4",
        },
        logIndex: 4,
      },
    ].sort(sortLogManagerList);
    expect(result).toStrictEqual(expected);
  });

  it("map logEntry to LogManagerItem", () => {
    const expected = {
      curr: {
        date: new Date("2021-01-31T00:00:00Z"),
        msg: "frase 2",
      },
      logIndex: 13,
    };
    const logManagerItem = mapLogEntryToLogManagerItem(
      {
        date: new Date("2021-01-31T00:00:00Z"),
        msg: "frase 2",
      },
      13
    );

    expect(logManagerItem).toStrictEqual(expected);
  });

  it("insert new Element in Log Manager", () => {
    const expected = [
      {
        curr: {
          date: new Date("2021-01-31T00:00:00Z"),
          msg: "frase 2",
        },
        logIndex: 2,
      },
      {
        curr: {
          date: new Date("2021-01-11T00:00:00Z"),
          msg: "frase 3",
        },
        logIndex: 3,
      },
      {
        curr: {
          date: new Date("2021-01-03T00:00:00Z"),
          msg: "frase 4",
        },
        logIndex: 4,
      },
      {
        curr: {
          date: new Date("2021-01-01T00:00:00Z"),
          msg: "frase 1",
        },
        logIndex: 1,
      },
    ];
    let logManager = [
      {
        curr: {
          date: new Date("2021-01-31T00:00:00Z"),
          msg: "frase 2",
        },
        logIndex: 2,
      },
      {
        curr: {
          date: new Date("2021-01-11T00:00:00Z"),
          msg: "frase 3",
        },
        logIndex: 3,
      },
      {
        curr: {
          date: new Date("2021-01-01T00:00:00Z"),
          msg: "frase 1",
        },
        logIndex: 1,
      },
    ];

    const newLogEntry = {
      curr: {
        date: new Date("2021-01-03T00:00:00Z"),
        msg: "frase 4",
      },
      logIndex: 4,
    };
    
    logManager = insertNewLogEntryInLogManager(logManager, newLogEntry);

    expect(logManager).toStrictEqual(expected);
  });
});
