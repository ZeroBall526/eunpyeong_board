"use client";

import { useRouter } from 'next/navigation';

export default function Question() {

    const router = useRouter();

    async function getresult() {
        const get_name = (document.getElementById("name") as HTMLInputElement).value;
        const get_detail = (document.getElementById("detail") as HTMLInputElement).value;

        if (get_detail == "" && get_name == "") {
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!");
        } else {
            const response = await fetch('/api/send', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: "question",
                    name: get_name,
                    detail: get_detail
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
        <main className="min-h-screen bg-slate-200 dark:bg-black p-5 md:p-10 flex justify-center">
            <section className="max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12 font-Pretendard font-semibold">

                <header className="mb-10">
                    <h1 className="text-5xl mb-6 font-semibold text-slate-900 dark:text-white">QNA 타임!</h1>
                    <p className="text-xl leading-relaxed text-slate-600 dark:text-gray-300">
                        수업을 들으며 궁금했던 부분이나 그 외에 궁금한 부분도<br className="hidden md:block" />
                        편하게 질문해주세요!
                    </p>
                </header>

                <div className="space-y-8">
                    <div className="group">
                        <label htmlFor="name" className="block mb-3 ml-1 text-slate-700 dark:text-gray-400">
                            이름을 적어주세요!(안적을시 익명으로 전송)
                        </label>
                        <input
                            id="name"
                            className="w-full bg-slate-50 dark:bg-gray-800 border-2 border-transparent focus:border-slate-300 dark:focus:border-gray-600 outline-none px-6 py-4 text-black dark:text-white text-xl rounded-2xl transition-all"
                            placeholder="이름을 적어주세요!"
                            defaultValue="익명"
                        />
                    </div>

                    <div className="group">
                        <form>
                            <textarea
                                id="detail"
                                placeholder="자신이 이 수업을 들으며 궁금했거나, 수업 외적으로 궁금한 부분을 적어주세요!"
                                className="w-full h-80 bg-slate-50 dark:bg-gray-800 border-2 border-transparent focus:border-slate-300 dark:focus:border-gray-600 outline-none px-6 py-5 text-black dark:text-white text-xl font-medium rounded-2xl transition-all resize-none"
                            />
                        </form>
                    </div>

                    <div className="flex justify-start pt-4">
                        <button
                            onClick={getresult}
                            className="w-full md:w-auto bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-200 text-xl font-bold px-10 py-4 rounded-2xl transition-transform active:scale-95 shadow-lg"
                        >
                            제출하기!
                        </button>
                    </div>
                </div>

                <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-gray-800 text-center">
                    <div className="text-slate-400 dark:text-gray-500 font-medium">
                        Copyright 2026. 가람메. All rights reserved.
                    </div>
                </footer>
            </section>
        </main>
    );
} 