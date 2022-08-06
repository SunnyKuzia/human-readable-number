module.exports = function toReadable(number) {
    let string = number.toString();

    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of units as words */
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array of tens as words */
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Stringify each integer in each chunk */
    const words = [];
    let word;

    /* Split chunk into array of individual integers */
    const ints = string.split('').reverse().map(i => parseInt(i));

    /* If tens integer is 1, i.e. 10, then add 10 to units integer */
    if (ints[1] === 1) {
        ints[0] += 10;
    }

    /* Add unit word if array item exists */
    if ((word = units[ints[0]])) {
        words.push(word);
    }

    /* Add tens word if array item exists */
    if ((word = tens[ints[1]])) {
        words.push(word);
    }

    /* Add hundreds word if array item exists */
    if ((word = units[ints[2]])) {
        words.push(word + ' hundred');
    }

    return words.reverse().join(' ');
}
