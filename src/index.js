module.exports = function reverse (n) {
    let arr = String(n).split('');
    let newArr = arr.filter(nums => nums != "-");
    let str = newArr.reverse().join('');
    return Number(str);
};