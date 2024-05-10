"use client";
export default function Question() {
    function getresult(){
        const get_name = document.getElementById("name").value;
        const get_detail = document.getElementById("detail").value;

        if( get_detail == ""){
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!");

        }else{
            if (get_name == "") {
                console.log("익명님의 의견");
                get_name == null;
            }else{
                console.log(get_name + "님의 의견")
            }
            console.log("의견: " + get_detail)
            alert("전송 선공!");
        }


    }

    return(
        <main>
            <section className="mx-[20px] font-Pretendard font-semibold">
                <h1 className="text-5xl py-10 font-semibold">QNA 타임!</h1>
                <a className="text-2xl py-3">수업을 들으며 궁금했던 부분이나 그 외에 궁금한 부분도
                편하게 질문해주세요! 
                </a>

                <div className="py-5 mb-6">
                    <label className = "dark:text-gray-400">이름을 적어주세요!(안적을시 익명으로 전송)</label>
                    <input id="name" className="w-full font-medium bf-slate-50 px-6 py-3 text-black text-xl rounded-lg dark:text-gray-400 dark:bg-gray-800" placeholder="이름을 적어주세요!"></input>
                </div>

                <div className="mb-6">
                    <form>
                        <textarea id="detail" placeholder="자신이 이 수업을 들으며 궁금했거나, 수업 외적으로 궁금한 부분을 적어주세요!" className="bf-slate-50 px-6 py-3 text-black text-xl rounded-lg dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-96 text-3xl font-medium"></textarea>
                    </form>
                </div>

                <button onClick={getresult} className="bg-slate-50 text-xl text-black px-6 py-3 rounded-lg dark:focus:ring-gray-700 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">제출하기!</button>
            </section>
            <footer  className="font-Pretenard justify-center">
                <div className="font-medium text-center">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer> 
        </main>
    );
} 