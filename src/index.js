module.exports = function reverse(n) {
    let m = n = n + "";
    let x = m.split("").reverse().join("");
    return parseInt(x);
}