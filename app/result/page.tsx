"use client";

export default async function board_home(){

    function Icebreaking(){
        const link = window.location.pathname + "/icebreaking_result"
        location.href = (link)
    }
    function Quiz(){
        const link = window.location.pathname + "/quiz_result"
        location.href = (link)
    }
    function Question(){
        const link = window.location.pathname + "/question_result"
        location.href = (link)
    }

    return(
        <main className="bg-slate-200 dark:bg-black">
            <section className="mx-[10px] font-Pretendard">
                <h1 className="text-5xl py-10 font-semibold">게시판 이동하기</h1>
                <a className='text-xl'>원하는 게시판을 선택해주세요!</a>

                <div className='my-10 space-y-4'>
                    <div onClick={Icebreaking} className='rounded bg-gray-50 p-4'>
                        <a className='text-5xl font-semibold block mb-6'>Icebreaking 🧊</a>
                        <a className='text-2xl'>아이스브레이킹 결과 페이지로 이동해요.</a>
                    </div>
                    <div onClick={Quiz} className='rounded bg-gray-50 p-4'>
                        <a className='text-5xl font-semibold block mb-6'>Quiz</a>
                        <a className='text-2xl'>컴퓨터공학 퀴즈 결과 페이지로 이동해요.</a>
                    </div>
                    <div onClick={Question} className='rounded bg-gray-50 p-4'>
                        <a className='text-5xl font-semibold block mb-6'>QNA 타임</a>
                        <a className='text-2xl'>질문을 확인하는 게시판 페이지로 이동해요.</a>
                    </div>
                </div>
            </section>
            <footer className="font-Pretenard justify-center md:p-8 lg:p-10 translate-y-0 h-full mt-4">
                <div className="font-medium text-center mx-auto max-w-screen-xl">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer>
        </main>
    )
}