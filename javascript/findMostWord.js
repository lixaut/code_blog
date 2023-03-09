
// 如何查找一篇英文文章中出现频率最高的词
function findMostWord(article) {
  // 合法判断
  if (!article) return;
  // 参数处理
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g),
    visited = [],
    maxNum = 0,
    maxWord = '';
  article = ' ' + wordList.join(' ') + ' ';
  // 遍历判断单词出现的次数
  wordList.forEach(item => {
    if (visited.indexOf(item) < 0) {
      visited.push(itme);
      let wordReg = new RegExp(' ' + item + ' ', 'g'),
        num = article.match(wordReg).length;
      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + " " + maxNum;
}