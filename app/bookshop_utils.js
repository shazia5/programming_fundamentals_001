function addVAT(price) {
    return price + (0.2 * price);
}
addVAT("Hello")



function getFullName(a , b) {
     const fullName = (a+ ' '+ b)
     return fullName
}
function makeHalfPrice(price) {
    
    return price - (0.5*price)
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,

};

