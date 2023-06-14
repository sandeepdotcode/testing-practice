export default function capitalize(string) {
    if (typeof string !== 'string') return 'Error! Input is not a string.';
    return string.charAt(0).toUpperCase().concat('', string.slice(1));
}
