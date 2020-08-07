const sumAll = function(a,b) {
    let numA = Number(a);
    let numB = Number(b);
    let sum = 0;
    if (typeof(a) != "number" || typeof(b) != "number"){
        return 'ERROR';
    }    
    if (numA < 0 || numB < 0) {
        return 'ERROR';
    }
    if (numA < numB) {
        for (let i = numA; i <= numB; i++) {
            sum += i;
        }
        return sum;
    }
    else if (numB < numA) {
        for (let i = numB; i <= numA; i++) {
            sum += i;
        }
        return sum;
    }    
    else {
        sum = numA + numB;
        return sum;
    }
}

module.exports = sumAll
