
const mysql = require('../../config/mysql');
const db = mysql();

const User={
	getIndex:function(callback)
  	{
        return db.query("SELECT * FROM customer_online_account",callback);
    },
    checkByIP:function(data,callback)
    {
        return db.query("SELECT * FROM great where ip_address=?",[data.ip],callback);
    }

};
module.exports=User;













