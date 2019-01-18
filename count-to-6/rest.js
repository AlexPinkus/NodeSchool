module.exports = function average(...nums) {
    const sum = nums.reduce((acc,num)=> acc+ num);
    return (sum/nums.length);
};