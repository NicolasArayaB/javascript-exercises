const leapYears = function(year) {
    let nonCentury = year % 4;
    let century = year % 100;
    let leapCentury = year % 400;

    if (century == 0 && leapCentury == 0) {
        return true;
    }
    else if (nonCentury == 0 && century != 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = leapYears
