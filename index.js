const emoji = (str) => {
    return `💩${str}💩`
};

const solveMaths = (a,b)=>{
    return a+b;
};

const randomNumberGenerator=(min,max)=>{
    if(typeof(max)!=='number' && typeof(min) !== 'number'){
        min = 0; max = 1;
    };
    return (Math.random() * (max-min)) + min;
}

module.exports = {
    emoji,
    solveMaths,
    randomNumberGenerator
}