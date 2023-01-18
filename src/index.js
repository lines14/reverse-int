module.exports = function reverse (n) {
    let str = n.toString();
    if (str[0] === '-') {
        str = str.slice(1, str.length);
        let revNumber = '';
        for (i in str) {
            revNumber = `${str[i]}${revNumber}`;
        };
        revNumber = Number(revNumber);
        return revNumber;
    } else {
        let revNumber = '';
        for (i in str) {
            revNumber = `${str[i]}${revNumber}`;
        };
        revNumber = Number(revNumber);
        return revNumber;
    };   
};
