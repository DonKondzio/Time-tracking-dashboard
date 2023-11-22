const currentStatParagraphs = document.querySelectorAll(".current-stat-text");
const previousStatParagraphs = document.querySelectorAll(".previous-stat-text");
const timeRangeBtns = document.querySelectorAll(".time-range-btn");

const dataObj = {
  daily: {
    curStats: [5, 1, 0, 1, 1, 0],
    prevStats: [7, 2, 1, 1, 3, 1],
  },
  weekly: {
    curStats: [32, 10, 4, 4, 5, 2],
    prevStats: [36, 8, 7, 5, 10, 2],
  },
  monthly: {
    curStats: [103, 23, 13, 11, 21, 7],
    prevStats: [128, 29, 19, 18, 23, 11],
  },
};

const dailyStats = [5, 1, 0, 1, 1, 0];
const dailyPrevStats = [7, 2, 1, 1, 3, 1];

const weeklyStats = [32, 10, 4, 4, 5, 2];
const weeklyPrevStats = [36, 8, 7, 5, 10, 2];

const monthlyStats = [103, 23, 13, 11, 21, 7];
const monthlyPrevStats = [128, 29, 19, 18, 23, 11];

const setData = (timeRange) => {
  let timeUnitName;

  switch (timeRange) {
    case "daily":
      timeUnitName = "Day";
      break;
    case "weekly":
      timeUnitName = "Week";
      break;
    case "monthly":
      timeUnitName = "Month";
      break;
  }

  currentStatParagraphs.forEach((el, index) => {
    el.textContent = `${dataObj[timeRange].curStats[index]}hrs`;
  });

  previousStatParagraphs.forEach((el, index) => {
    el.textContent = `Last ${timeUnitName} - ${dataObj[timeRange].prevStats[index]}hrs`;
  });
};

const setColor = (e) => {
  timeRangeBtns.forEach((btn) => {
    btn.classList.remove("text-white");
  });
  e.target.classList.add("text-white");
};

timeRangeBtns.forEach((btn) => {
  btn.addEventListener("click", () =>
    setData(btn.textContent.trim().toLowerCase())
  );
});

timeRangeBtns.forEach((btn) => {
  btn.addEventListener("click", setColor);
});
