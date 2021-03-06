"use strict";
const {
  sortLogManagerList,
  insertNewLogEntryInLogManager,
  mapLogEntryToLogManagerItem,
} = require("./helpers");

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  let logManager = 
    logSources
      .map((logSource) => logSource.pop())
      .map(mapLogEntryToLogManagerItem)
      .sort(sortLogManagerList);
  

  while (logManager.length > 0) {
    const entryToPrint = logManager.pop();
    printer.print(entryToPrint.curr);

    const newLogEntry = mapLogEntryToLogManagerItem(
      logSources[entryToPrint.logIndex].pop(),
      entryToPrint.logIndex
    );

    if (newLogEntry.curr !== false) {
      logManager = insertNewLogEntryInLogManager(logManager, newLogEntry);
    }
  }
  printer.done();
};
