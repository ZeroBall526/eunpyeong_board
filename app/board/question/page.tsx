export default function Question() {
    return(
        <main>
            <h1>QnA 질문하기</h1>
            <a>수업을 들으며 궁금한 부분이나 그외에 궁금한 부분도 편하게 질문해주세요. </a>

            <div>
                <input placeholder="이름(적지 않을시 익명으로 전송되요!)"></input>
                <input placeholder="* 질문할 내용"></input>
                <button>제출하기</button>
            </div>
        </main>
    );
} 