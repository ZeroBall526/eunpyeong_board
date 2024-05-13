
export async function senddb(sql){
    var mysql = require('mysql2')

    const pool = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306,
    })
    pool.connect()
    pool.query(sql, function (error, results, fields) {
        if (error) {
         console.log(error);
       }else{
         for(var i=0; i<results.length; i++){
           console.log(results[i].title);
         }
       }
      });
     pool.end();
}