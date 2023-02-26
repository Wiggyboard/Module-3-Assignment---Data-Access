const db = require('../config/db.manager');
exports.getCustomers = function (req, res) {
const customers = db.getCustomers().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}