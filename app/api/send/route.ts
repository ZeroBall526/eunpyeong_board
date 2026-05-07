import gettime from "@/app/_lib/time";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
  let sql
  let param
  let result
  let name
  let detail
  let q1

  const raw = await req.json()
  const type = raw.type
  //console.log(type)

  switch(type){
    case "about":
      //depercated : EOS
      return NextResponse.json({success: false, message: "depercated"},{status: 406})
    case "icebreak":
      //icebreak board page
      name = raw.name
      q1 = raw.q1

      if (q1 == "4"){
        result = "정답"
      }else{
        result = "X"
      }

      sql = "insert ignore into icebreak(id,answer,name,result,date) values (?,?,?,?,?)"
      param = [null,q1,name,result,gettime]

      //integrity check
      if(q1 == null && name == null) return NextResponse.json({success: false},{status: 400});

      break
    case "quiz":
      //quiz board page
      q1 = raw.q1
      const q2 = raw.q2
      const q3 = raw.q3
      const q4 = raw.q4
      const get_name = raw.get_name

      if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 1){
        result = "정답"
      }else{
        result = "X"
      }

      sql = "insert ignore into quiz(id,quiz1,quiz2,quiz3,quiz4,name,date,result) values (?,?,?,?,?,?,?,?)"
      param = [null,q1,q2,q3,q4,get_name,gettime,result]

      //integrity check
      if(q1 == null && q2 == null && q3 == null && q4 == null && get_name == null)
        return NextResponse.json({success: false},{status: 400});

      break
    case "question":
      //question board page
      name = raw.name
      detail = raw.detail
  
      sql = "insert into question(id,name,question,date) values (?,?,?,?)"
      param = [null , name , detail, gettime]

      //integrity check
      if(name == null && detail == null) return NextResponse.json({success: false},{status: 400});

      break
    case "test":
      //api test
      return Response.json({success: true})
    default:
      //something else
      return NextResponse.json({success: false},{status: 400})
  }

  try{
    db_con(sql,param)
  }catch(e){
    return NextResponse.json({success: false},{status: 400})
  }
  return Response.json({success: true})
  //res.status(200).json({success: true, type: data.type})
}

async function db_con(sql: any, param : any){
    var mysql = require('mysql2')

    const pool = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: 3306,
    })
    pool.connect()
    pool.query(sql,param, function (error: any, results: any, fields: any) {
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