date = "2019-01-09"

const dayOfYear = function(date) {
    const dateToArr = date.split("-");
    const year = Number(dateToArr[0]);
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) months[1] = 29;

    const month = Number(dateToArr[1]);
    const day = Number(dateToArr[2]);

    const result = months
    .slice(0, month - 1)
    .reduce((acc, cur) => acc + cur, day);

    return result
};

dayOfYear()