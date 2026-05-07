import Link from 'next/link'

export default function board_home(){

    return(
        <main className="bg-slate-200 dark:bg-black">
            <section className="mx-[10px] font-Pretendard">
                <h1 className="text-5xl py-10 font-semibold">보드 이동하기</h1>
                <a className='text-xl'>원하는 보드를 선택해주세요!</a>

                <div className='my-10 space-y-4'>
                    <Link href="/result/icebreaking" className='block rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 hover:scale-[1.02] transition-transform shadow-sm'>
                        <span className='text-5xl font-semibold block mb-6'>Icebreaking 🧊</span>
                        <span className='text-2xl'>아이스브레이킹 결과 페이지로 이동해요.</span>
                    </Link>
                    <Link href="/result/quiz" className='block rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 hover:scale-[1.02] transition-transform shadow-sm'>
                        <span className='text-5xl font-semibold block mb-6'>Quiz</span>
                        <span className='text-2xl'>컴퓨터공학 퀴즈 결과 보드 페이지로 이동해요.</span>
                    </Link>
                    <Link href="/result/question" className='block rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 hover:scale-[1.02] transition-transform shadow-sm'>
                        <span className='text-5xl font-semibold block mb-6'>QNA 타임</span>
                        <span className='text-2xl'>질문을 확인하는 게시판 페이지로 이동해요.</span>
                    </Link>
                </div>
            </section>
            <footer className="font-Pretenard justify-center md:p-8 lg:p-10 translate-y-0 h-full mt-4">
                <div className="font-medium text-center mx-auto max-w-screen-xl">
                Copyright 2026. 가람메. All rights reserved.
                </div>
            </footer>
        </main>
    )
}