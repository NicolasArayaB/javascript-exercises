const reverseString = function(text) {
    let splited = text.split("");
    let reversed = splited.reverse();
    let revers = reversed.join("");

    return revers;
}

module.exports = reverseString
