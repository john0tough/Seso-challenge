const sortLogManagerList = (left, right) => {
  return right.curr.date.getTime() - left.curr.date.getTime();
};

const insertNewLogEntryInLogManager = (logManager, newLogEntry) => {
  const lastPopIndex = logManager.findIndex((el) => {
    return el.curr.date.getTime() < newLogEntry.curr.date.getTime();
  });

  if (lastPopIndex >= 0) {
    logManager.splice(lastPopIndex, 0, newLogEntry);
  } else {
    logManager.push(newLogEntry);
  }
  return logManager;
};

const mapLogEntryToLogManagerItem = (logEntry, logSourceIndex) => ({
  curr: logEntry,
  logIndex: logSourceIndex,
});

module.exports = {
  sortLogManagerList,
  insertNewLogEntryInLogManager,
  mapLogEntryToLogManagerItem,
};
