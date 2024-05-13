import gettime from '@/app/_lib/time';
import { useRouter } from 'next/router';

export default async function getServerSideProps(){

    const router = useRouter()

    const q1 = router.query.q1
    const q2 = router.query.q2
    const q3 = router.query.q3
    const q4 = router.query.q4;
    const get_name = router.query.get_name


    const sql = "insert into quiz values (null,"+q1+","+q2+","+q3+","+q4 +",'" + get_name + "','" + gettime + "')"

    var mysql = require('mysql2')

      const pool = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306,
    })
    pool.connect()
    pool.query(router.query.sql, function (error, results, fields) {
        if (error) {
         console.log(error);
         alert("전송 선공!")
       }else{
         for(var i=0; i<results.length; i++){
           console.log(results[i].title);
         }
       }
      });
    pool.end();

    }