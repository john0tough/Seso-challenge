"use strict";

const {
  mapLogEntryToLogManagerItem,
  sortLogManagerList,
  insertNewLogEntryInLogManager,
} = require("./helpers");

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    resolve(
      Promise.all(
        logSources.map((logSource, sourceIndex) =>
          logSource
            .popAsync()
            .then((logEntry) =>
              mapLogEntryToLogManagerItem(logEntry, sourceIndex)
            )
        )
      )
        .then((list) => list.sort(sortLogManagerList))
        .then(async (logManager) => {
          while (logManager.length > 0) {
            const entryToPrint = logManager.pop();
            printer.print(entryToPrint.curr);

            // here is needed wait for response in order to insert new value in chronological order
            const newLogEntry = await logSources[entryToPrint.logIndex]
              .popAsync()
              .then((logEntry) =>
                mapLogEntryToLogManagerItem(logEntry, entryToPrint.logIndex)
              );

            if (newLogEntry.curr !== false) {
              logManager = insertNewLogEntryInLogManager(
                logManager,
                newLogEntry
              );
            }
          }
          printer.done();
        })
    );
  });
};
