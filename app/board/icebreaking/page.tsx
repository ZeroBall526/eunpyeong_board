'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Icebreaking() {

    const router = useRouter();
    const [q1, setQ1] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQ1(e.target.value);
    };

    async function getresult() {
        const get_name = (document.getElementById("name") as HTMLInputElement)?.value;
        if (q1 == null || get_name == "") {
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!")

        } else {
            const response = await fetch('/api/send', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: "icebreak",
                    name: get_name,
                    q1: q1
                })
            })
            const result = await response.json()

            if (result.success) {
                router.push("/success")
            } else {
                alert('답변 전송중 오류가 발생했어요! 나중에 시도해주세요.')
            }
        }
    }
    return (
        <main className="min-h-screen bg-slate-200 dark:bg-black p-1.5 md:p-10 justify-center">
            <section className="mx-[20px] font-Pretendard font-bold">
                <div className="bg-slate-50 text-black text-2xl rounded-2xl dark:bg-gray-800 dark:text-gray-400 p-8 my-6">
                    <h1 className="text-5xl">Icebreaking 🧊</h1>

                    <div className="mb-6 my-8">
                        <input id="name" className="w-full font-medium bf-slate-50 px-4 py-3 text-black text-xl border border-gray-300 rounded-2xl dark:text-gray-400 dark:bg-gray-800" placeholder="이름을 적어주세요!"></input>
                    </div>
                    <div className="m-y4 py-5">
                        <a> 멘토의 거짓정보를 하나 고르세요!</a>
                        <div className="pt-10 float: inline-start;">
                            <div className="grid items-center rounded-2xl dark:border-gray-700 gap-1">
                                {['1', '2', '3', '4'].map((val) => (
                                    <div
                                        key={val}
                                        className="flex items-center ps-4 gap-4 border border-gray-200 rounded-2xl dark:border-gray-700"
                                    >
                                        <input
                                            id={`q1-${val}`}
                                            type="radio"
                                            name="q1"
                                            value={val}
                                            checked={q1 === val} // 상태값이 현재 value와 같으면 체크됨
                                            onChange={handleChange}
                                            className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor={`q1-${val}`}
                                            className="w-full py-4 ms-2 text-m font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                                        >
                                            {val}
                                        </label>
                                    </div>
                                ))}

                            </div>
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

            <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-gray-800 text-center">
                <div className="text-slate-400 dark:text-gray-500 font-medium">
                    Copyright 2026. 가람메. All rights reserved.
                </div>
            </footer>
        </main>
    );
} 