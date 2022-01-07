const mysql = require("mysql");
const promise = require("bluebird");
promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbc = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "mini",
};

async function addmsg() {
    const Connection = mysql.createConnection(dbc);
    await Connection.connectAsync();
    console.log("sdafa");
    let sql = 'insert into ss (message) values(?)';

    await Connection.queryAsync(sql, [user.message]);

    await Connection.endAsync();

};


async function getmsg() {
    const Connection = mysql.createConnection(dbc);
    await Connection.connectAsync();
    console.log("sdafa");
    let sql = 'select * from ss';

    const list = await Connection.queryAsync(sql, []);

    await Connection.endAsync();
    return list;

}
const user = { message: "hello" };

addmsg(user);
getmsg();

module.exports = { addmsg, getmsg };



