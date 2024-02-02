/**
 * 时间格式化
 * second -> day-hour-minute-second
 * @param {string|number} seconds
 * @returns {string}
 */
export const secondFormatter = (seconds) => {
  let S = +seconds;
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (S < minute) {
    return S + '秒';
  }
  if (S >= minute && S < hour) {
    let m = Math.floor(S / minute);
    return m + '分钟' + secondFormatter(S % minute);
  }
  if (S >= hour && S < day) {
    let h = Math.floor(S / hour);
    return h + '小时' + secondFormatter(S % hour);
  }
  if (S >= day) {
    let d = Math.floor(S / day);
    return d + '天' + secondFormatter(S % day);
  }
};

/**
 * 动态合并表格行
 * @param {Array} tableList 表格数据
 * @param {Array} spanColFields 需要行合并的字段集
 * @returns {Object}
 */
export function getRowSpanObj(tableList, spanColFields) {
  const rowSpanObj = {};
  spanColFields.forEach((field) => {
    let count = 0;
    rowSpanObj[field] = [];
    tableList.forEach((row, index) => {
      if (index === 0) {
        rowSpanObj[field].push(1);
      } else {
        if (row[field] === tableList[index - 1][field]) {
          rowSpanObj[field][count] += 1;
          rowSpanObj[field].push(0);
        } else {
          rowSpanObj[field].push(1);
          count = index;
        }
      }
    });
  });
  return rowSpanObj;
}
