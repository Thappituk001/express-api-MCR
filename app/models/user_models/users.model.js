
const mysql = require('../../../config/mysql');
const db = mysql();

const User={
    getAllUsers:function(callback)
    {
        return db.query("SELECT * FROM customer_online",callback);
    },
    getUserById:function(id,callback)
    {
        return db.query("SELECT * FROM customer_online where id_customer=?",[id],callback);
    },
    addUser:function(User,callback)
    {
        return db.query("Insert into customer_online values(?,?,?)",[User.id_customer,User.fname,User.lname,User.birthdate,User.tel,User.sex,User.status],callback);
    },
    deleteUser:function(id,callback)
    {
        return db.query("delete from customer_online where id_customer=?",[id],callback);
    },
    updateUser:function(User,callback)
    {
        return db.query("update customer_online set fname=?,lname=?,birthdate=?,tel=?,sex=?,status=? where id_customer=?",[User.fname,User.lname,User.birthdate,User.tel,User.sex,User.status],callback);
    },
    login:function(User,callback)
    {
        return User;
    },
    register:function(User,callback)
    {
        return User;
    },
    saveUser:function(User,callback){

    }

};
module.exports=User;













