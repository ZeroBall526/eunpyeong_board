
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react'


export default function Final_quiz() {

    const router = useRouter();

    const [q1, setQ1] = useState<null | string>(null)
    const [q2, setQ2] = useState<null | string>(null)
    const [q3, setQ3] = useState<null | string>(null)
    const [q4, setQ4] = useState<null | string>(null)

    const handleChange = (qn: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (qn) {
            case 1: return setQ1(e.target.value)
            case 2: return setQ2(e.target.value)
            case 3: return setQ3(e.target.value)
            case 4: return setQ4(e.target.value)
        }
    };

    async function getresult() {
        const get_name = (document.getElementById("name") as HTMLInputElement)?.value;

        if (q1 == null || q2 == null || q3 == null || q4 == null || get_name == "") {
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!")

        } else {
            const response = await fetch('http://' + window.location.host + '/api/send', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: "quiz",
                    q1: q1,
                    q2: q2,
                    q3: q3,
                    q4: q4,
                    get_name: get_name
                })
            })
            const result = await response.json()

            if (result.success) {
                router.push("/success")
            } else {
                alert('답변 전송중 오류가 발생했어요! 나중에 시도해주세요.')
            }

            console.log(get_name + "님의 답변");
            console.log("Q1:" + q1);
            console.log("Q2:" + q2);
            console.log("Q3:" + q3);
            console.log("Q4:" + q4);
        }

    };

    function oxui(questionNumber: number) {
        return (
            <div className="grid gap-1">
                <div className="flex items-center ps-4 border border-gray-200 rounded-2xl dark:border-gray-700">
                    <input id="o" onChange={handleChange(questionNumber)} value="1" type="radio" name={`q${questionNumber}`} className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label htmlFor="o" className="w-full py-4 ms-2">⭕</label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded-2xl dark:border-gray-700">
                    <input id="x" onChange={handleChange(questionNumber)} value="0" type="radio" name={`q${questionNumber}`} className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label htmlFor="x" className="w-full py-4 ms-2">❌</label>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-slate-200 dark:bg-black md:p-10 justify-center flex flex-col">
            <section className="mx-[20px] font-Pretendard font-bold">
                <h1 className="text-4xl py-10 ">퀴즈를 통하여📝<br></br>나도 컴퓨터공학 마스터</h1>

                <div className=" mb-6 bg-slate-50 p-4 rounded-2xl">
                    <input id="name" className="w-full font-medium bf-slate-50 px-4 py-3 text-black text-xl rounded-2xl dark:text-gray-400 dark:bg-gray-800" placeholder="이름을 적어주세요!"></input>
                </div>


                <div className="bg-slate-50 text-black text-2xl rounded-2xl dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-4 py-6">
                        <a>1. 컴퓨터공학이란 다양한 형태의 정보에 대해 기술을
                            <br></br>통합적으로 가지고 노는 비 첨단 학문이다.</a>
                        <div className="pt-10 gap-1 float: inline-start;">
                            {oxui(1)}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-2xl dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-4 py-6">
                        <a>2. HTML은 인터넷 사이트(웹 페이지)를 만드는데 사용된다.
                        </a>
                        <div className="pt-10 gap-1 float: inline-start;">
                            {oxui(2)}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-2xl dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-4 py-6">
                        <a>3. 팀워크가 없어도 프로그래머(개발자)가 되는데 문제없다. 
                        </a>
                        <div className="pt-10 gap-1 float: inline-start;">
                            {oxui(3)}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-2xl dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-4 py-6">
                        <a>4. 개발자는 프로그램 개발을 넘어 <br></br>
                        다양한 분야와 연결하여 새로운 아이디어와 진로를 만들어 낼 수 있다.
                        </a>
                        <div className="pt-10 gap-1 float: inline-start;">
                            {oxui(4)}
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-4">
                    <button
                        onClick={getresult}
                        className="w-full md:w-auto bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-200 text-xl font-bold px-10 py-4 rounded-2xl transition-transform active:scale-95 shadow-lg"
                    >
                        제출하기!
                    </button>
                </div>

            </section>
            <footer className="my-16 pt-8 border-t border-slate-100 dark:border-gray-800 text-center">
                <div className="text-slate-400 dark:text-gray-500 font-medium">
                    Copyright 2026. 가람메. All rights reserved.
                </div>
            </footer>
        </main>
    );
} 