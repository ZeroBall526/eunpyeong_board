import executeQuery from "@/app/_lib/db"

export default async function Quiz2_result() {

    const sql = 'select * from quiz'
    const data = await executeQuery(sql, '')
    const getdata = JSON.parse(JSON.stringify(data))
    
    //const getdata = JSON.parse(JSON.stringify(data))

    //데이터 갯수 구하는 함수
    //console.log(getdata.length)

    const read_data = (
        <div>
            {getdata.map(token =>(

                <div className="m-5 bg-slate-100 text-xl rounded-lg p-5 dark:bg-slate-800">
                    <a> id : {token.id}</a>
                    <br></br>
                    <a>이름: {token.name}</a>
                    <div className="justify-start">
                        <a>1. {token.quiz1} </a>
                        <a>| 2. {token.quiz2} </a>
                        <a>| 3. {token.quiz3} </a>
                        <a>| 4. {token.quiz4} </a>
                    </div>
                    <a>제출 날짜 : {token.date}</a>
                    <br></br>
                    <a>정답 유무 : {"asdf"}</a>
                </div>
            ))

            }
        </div>
    )
    //   <p>{JSON.stringify(data)}</p>

    return (
        <main className="font-Pretendard">
            <p className="text-6xl py-10 font-bold">퀴즈 게시판 보드</p>
            <p className="text-xl">데이터 갯수: {getdata.length} 개</p>
            <br></br>
            <p className="text-xl"> 정답은 0 1 0 1 입니다</p>
         
            {read_data}

            <footer  className="font-Pretenard justify-center">
                <div className="font-medium text-center">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer>    
        </main>
    );
}