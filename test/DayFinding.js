const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  
  console.log(dayOfYear);