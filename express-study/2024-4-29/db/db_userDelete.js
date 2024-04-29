const oracledb = require('oracledb');


async function getConnection() {

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    return conn;
}

module.exports = {
    getConnection
};
