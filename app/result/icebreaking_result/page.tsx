import executeQuery from "@/app/_lib/db";

export default async function icebreaking_result() {

    const sql = 'select * from icebreak'
    const data = await executeQuery(sql, '')
    const getdata = JSON.parse(JSON.stringify(data))

    const read_data =(
        <div>
            {getdata.map(token =>
                <div className="m-5 bg-slate-100 text-xl rounded-lg p-5 dark:bg-slate-800">
                    <a> id : {token.id}</a>
                    <br></br>
                    <a>이름 : {token.name}</a>
                    <br></br>
                    <a>작성한 정답 : {token.answer}</a>
                    <br></br>
                    <a>제출 날짜 : {token.date}</a>
                </div>
            )}
        </div>
    )

    return (
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