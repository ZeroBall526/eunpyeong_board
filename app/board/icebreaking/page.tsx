'use client'
export default function Icebreaking() {
    async function getresult() {
        const get_name = document.getElementById("name").value;

        const get_q1 = document.getElementsByName('q1');
        var q1 = null;

        for(var i=0;i<get_q1.length;i++) {
            if(get_q1[i].checked == true) {
                q1 = get_q1[i].value;
            }
        }

        if(q1 == null || get_name == ""){
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!")

        }else{
            const link = window.location.pathname + "/send?name=" + get_name + "&answer=" + q1
            location.href = (link)
        }
    }
    return (
        <main className="bg-slate-200 dark:bg-black">
            <section className="mx-[20px] font-Pretendard font-bold">

            <h1 className="text-4xl py-10">Icebreaking 🧊</h1>

            <div className="pl=1 mb-6">
                <input id="name" className="w-full font-medium bf-slate-50 px-4 py-3 text-black text-xl rounded-lg dark:text-gray-400 dark:bg-gray-800" placeholder="이름을 적어주세요!"></input>
            </div>

            <div className="bg-slate-50 text-black text-2xl rounded-lg dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-4 py-5">
                        <a> 멘토의 거짓정보를 하나 고르세요!</a>
                        <div className="pt-10 float: inline-start;">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="1" id="q1-1" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor="q1-1" className="w-full py-4 ms-2">1</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="2" id="q1-2" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor="q1-2" className="w-full py-4 ms-2">2</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="3" id="q1-3" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor="q1-3" className="w-full py-4 ms-2">3</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="4" id="q1-4" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor="q1-4" className="w-full py-4 ms-2">4</label>
                            
                            </div>
                        </div>
                    </div>
                </div>

            <button onClick={getresult} className="bg-slate-50 text-2xl text-black px-6 py-3 rounded-lg dark:focus:ring-gray-700 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">제출하기!</button>
        </section>

            <footer className="font-Pretenard justify-center md:p-8 lg:p-10 translate-y-0 h-full mt-10">
                    <div className="font-medium text-center mx-auto max-w-screen-xl">
                    Copyright 2024. 가람메. All rights reserved.
                    </div>
            </footer>    
        </main>
    );
} 