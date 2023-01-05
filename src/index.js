module.exports = function toReadable(number) {
    let result
    const numbers = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
    };
    const tens = {
        "1": "ten",
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety",
    }

    let stringNumber = String(number);
    if (number >= 0 && number < 20) {
        result = numbers[stringNumber]
    } else if (number >= 20 && number <= 99 && number % 10 !== 0) {
        result = tens[stringNumber[0]] + ' ' + numbers[stringNumber[1]]
    } else if (number >= 20 && number < 99 && number % 10 === 0) {
        result = tens[stringNumber[0]]
    } else if (number % 100 === 0) {
        result = numbers[stringNumber[0]] + ' hundred'
    } else if (number > 119 && number % 10 === 0) {
        result = numbers[stringNumber[0]] + ' hundred ' + tens[stringNumber[1]];
    } else if (number > 100 && +stringNumber.substring(1) > 9 && +stringNumber.substring(1) < 20) {
        result = numbers[stringNumber[0]] + ' hundred ' + numbers[stringNumber.substring(1)];
    } else if (number > 100 && +stringNumber[1] === 0) {
        result = numbers[stringNumber[0]] + ' hundred ' + numbers[stringNumber[2]];
    } else {
        result = numbers[stringNumber[0]] + ' hundred ' + tens[stringNumber[1]] + ' ' + numbers[stringNumber[2]];
    }


    return result
}
