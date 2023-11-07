// index.js

const { addDays, format } = require('date-fns');

function getDateAfterXDays(days) {
    const startDate = new Date(2020, 7, 22); // August is 7 (0-based index)
    const endDate = addDays(startDate, days);
    return format(endDate, 'dd-MM-yyyy');
}

module.exports = getDateAfterXDays;
