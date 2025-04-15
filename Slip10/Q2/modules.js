
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(); 
}
module.exports.getCurrentDateTime = getCurrentDateTime;
