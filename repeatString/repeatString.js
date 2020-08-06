const repeatString = function(text, num) {
    let repeatedText = "";
    if (num >= 0) {
       for (let i = 0; i < num; i++) {
        repeatedText += text;
        }
    return repeatedText; 
    }
    else {
        return 'ERROR'
    }
    
}

module.exports = repeatString
