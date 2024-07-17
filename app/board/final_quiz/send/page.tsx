import gettime from '@/app/_lib/time';
import { redirect } from 'next/navigation'

export default async function getServerSideProps({ searchParams }){

    const q1 = searchParams.q1
    const q2 = searchParams.q2
    const q3 = searchParams.q3
    const q4 = searchParams.q4
    const get_name = searchParams.get_name

    const sql = "insert ignore into quiz values (null,"+q1+","+q2+","+q3+","+q4 +",'" + get_name + "','" + gettime + "')"

    var mysql = require('mysql2')

    const pool = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: 3306,
    })
    pool.connect()
    pool.query(sql, function (error: any, results: any, fields: any) {
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
    redirect('/success')
    }