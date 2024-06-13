import executeQuery from "@/app/_lib/db";

export default async function About_result() {

    const sql = 'select * from about'
    const data = await executeQuery(sql, '')
    const getdata = JSON.parse(JSON.stringify(data))

    console.log(getdata)

    const read_data = (
        <div>
            {getdata.map(token =>(

                <div className="m-5 bg-slate-100 text-xl rounded-lg p-5">
                    <a> id : {token.id}</a>
                    <br></br>
                    <a>이름: {token.name}</a>
                    <br></br>
                    <a>컴퓨터공학에 대한 생각: {token.idea}</a>
                    <br></br>
                    <a>제출 날짜 : {token.date}</a>
                    <br></br>
                </div>
            ))

            }
        </div>
    )

    return(
        <main className="font-Pretendard">
            <p className="text-6xl py-10 font-bold">퀴즈 게시판 보드</p>
            <p className="text-xl">데이터 갯수: {getdata.length} 개</p>
         
            {read_data}

            <footer  className="font-Pretenard justify-center">
                <div className="font-medium text-center">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer>    
        </main>
    );
} 