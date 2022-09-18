let num = 0;
const viewCount = (req, res, next) => {
  num++;
  console.log(num);
  next();
};
module.exports = viewCount;
