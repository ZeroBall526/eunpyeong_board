import { get } from "http";

"use client";
export default function Final_quiz() {

    function getresult() {
        console.log("hello world");

        const get_name = document.getElementById("name").value;

        const get_q1 = document.getElementsByName('q1');
        const get_q2 = document.getElementsByName('q2');
        const get_q3 = document.getElementsByName('q3');
        const get_q4 = document.getElementsByName('q4');
        
        var q1 = null;
        var q2 = null;
        var q3 = null;
        var q4 = null;
    
        for(var i=0;i<get_q1.length;i++) {
            if(get_q1[i].checked == true) {
                q1 = get_q1[i].value;
            }
        }
        for(var i=0;i<get_q2.length;i++) {
            if(get_q2[i].checked == true) {
                q2 = get_q2[i].value;
            }
        }
        for(var i=0;i<get_q3.length;i++) {
            if(get_q3[i].checked == true) {
                q3 = get_q3[i].value;
            }
        }
        for(var i=0;i<get_q4.length;i++) {
            if(get_q4[i].checked == true) {
                q4 = get_q4[i].value;
            }
        }
        
        if(q1 == null || q2 == null || q3 == null || q4 == null || get_name == ""){
            alert("답변을 안한 항목이 있어요! 다시 확인해주세요!")

        }else{
            console.log(get_name + "님의 답변");
            console.log("Q1:"+ q1);
            console.log("Q2:" + q2);
            console.log("Q3:"+ q3);
            console.log("Q4:"+ q4);
            alert("전송 선공!")
        }

    };

    return(
        <main>
            <section className="mx-[20px] font-Pretendard font-bold">
                <h1 className="text-3xl py-10">퀴즈를 통하여📝<br></br>나도 컴퓨터공학 마스터</h1>

                <div className="pl=1 mb-6">
                    <input id="name" className="w-full font-medium bf-slate-50 px-6 py-3 text-black text-xl rounded-lg dark:text-gray-400 dark:bg-gray-800" placeholder="이름을 적어주세요!"></input>
                </div>
                    

                <div className="bg-slate-50 text-black text-2xl rounded-lg dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-10 py-10">
                        <a>1. 컴퓨터공학이란 다양한 형태의 정보에 대해 기술을
                        <br></br>통합적으로 가지고 노는 비 첨단 학문이다.</a>
                        <div className="pt-10 float: inline-start;">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="True" id="q1-1" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q1-1" class="w-full py-4 ms-2">⭕</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="False" id="q1-2" type="radio" name="q1" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q1-2" class="w-full py-4 ms-2">❌</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-lg dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-10 py-10">
                        <a>2. 객체지향이란 하나의 정보나 상태를 여러객체로 나누어 
                        표현함을 의미한다.
                        </a>
                        <div className="pt-10 float: inline-start;">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="True" id="q2-1" type="radio" name="q2" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-1" class="w-full py-4 ms-2">⭕</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="False" id="q2-2" type="radio" name="q2" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-2" class="w-full py-4 ms-2">❌</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-lg dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-10 py-10">
                        <a>3. 사용자에게 보여주는 페이지를 만드는 개발자를
                        ‘Backend’라 부른다.
                        </a>
                        <div className="pt-10 float: inline-start;">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="True" id="q2-1" type="radio" name="q3" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-1" class="w-full py-4 ms-2">⭕</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="False" id="q2-2" type="radio" name="q3" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-2" class="w-full py-4 ms-2">❌</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 text-black text-2xl rounded-lg dark:bg-gray-800 dark:text-gray-400">
                    <div className="m-10 py-10">
                        <a>4. 한국 아이티 5대공룡을 ‘네카라쿠바’라 줄여 말한다.
                        </a>
                        <div className="pt-10 float: inline-start;">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="True" id="q2-1" type="radio" name="q4" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-1" class="w-full py-4 ms-2">⭕</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input value="False" id="q2-2" type="radio" name="q4" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label for="q2-2" class="w-full py-4 ms-2">❌</label>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={getresult} className="bg-slate-50 text-2xl text-black px-6 py-3 rounded-lg dark:focus:ring-gray-700 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">제출하기!</button>
            </section>
            <footer  className="font-Pretenard justify-center">
                <div className="font-medium text-center">
                Copyright 2024. 가람메. All rights reserved.
                </div>
            </footer>    
        </main>
    );
} 