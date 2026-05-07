export default function send_success() {
    return (
        <main className="min-h-screen w-full bg-gradient-to-br overflow-hidden from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">

            <div className="relative w-full max-w-lg">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className="relative backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 md:p-16 text-center transition-transform hover:scale-[1.02] duration-500">
                    <div className="font-Pretendard">
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-full">
                            <span className="text-4xl">✅</span>
                        </div>

                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            답변이 성공적으로<br />전송되었습니다.
                        </h1>
                        <p className="text-xl md:text-xl text-white/90 font-medium">
                            참여해주셔서 감사합니다!
                        </p>
                    </div>
                    <footer className="mt-12 font-Pretendard">
                        <div className="text-white/60 text-sm font-medium tracking-wider">
                            Copyright 2026. 가람메. All rights reserved.
                        </div>
                    </footer>
                </div>
            </div>

        </main>
    )
}