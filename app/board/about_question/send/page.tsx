import gettime from '@/app/_lib/time';
import { redirect } from 'next/navigation'

export default async function getServerSideProps({ searchParams }){

    const name = searchParams.name
    const detail = searchParams.detail

    const sql = "insert into about values (null,'" + name +"', '"+ detail +"','"+ gettime +"')"

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