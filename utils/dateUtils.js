// dateUtils.js

/**
 * Formats a Date object into "ddd MMM DD HH:mm:ss UTC YYYY"
 * Example: "Wed Sep 18 21:55:00 UTC 2024"
 */
function formatDate(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const day = days[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const dayOfMonth = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const year = date.getUTCFullYear();
  
    return `${day} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds} UTC ${year}`;
  }
  
  /**
   * Returns a random date between startDate and endDate.
   */
  function getRandomDate(startDate, endDate) {
    const diff = endDate.getTime() - startDate.getTime();
    const randomOffset = Math.floor(Math.random() * diff);
    return new Date(startDate.getTime() + randomOffset);
  }
  
  module.exports = { formatDate, getRandomDate };
  