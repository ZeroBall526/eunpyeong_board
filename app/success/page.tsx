'use client'

export default function send_success(){
    return(
        <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white w-screen h-screen">
            <div className="font-Pretenard place-content-center">
                <div className="m-10">
                    <p className="text-4xl font-bold">답변이 성공적으로 전송되었습니다.</p>
                    <p className="text-2xl mt-3">참여해주셔서 감사합니다!</p>
                </div>
            </div>
            <footer className="font-Pretenard justify-center">
                <div className="font-medium text-center">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer> 
        </main>
    )
}