import React, {useState} from 'react';

function App() {
    // 1번 문제
    const [input1, setInput1] = useState('');
    const [result1, setResult1] = useState('');

    const click1 = () => {
        const numbers = input1.split(' ');

        const a = Number(numbers[0]);
        const b = Number(numbers[1]);

        const sum = a + b;
        setResult1(sum);
    };

    // 2번 문제
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [result2, setResult2] = useState('');

    const click2 = () => {
        if (input2.length > input3.length) {
            setResult2(input2);
        } else {
            setResult2(input3);
        }
    };

    return (
        <>
            <h1>알고리즘 풀기~~ 📖</h1>

            {/*1번 문제*/}
            <h2>🎀 1번 문제 🎀</h2>
            <input
                type="text"
                value={input1}
                onChange={e => setInput1(e.target.value)}
                placeholder="예시) 5 3"

            />
            <br/>
            <button onClick={click1}>계산하기</button>
            <p>합계는 '{result1}' 입니다 ⭐️</p>

            {/*2번 문제*/}
            <h2>🎀 2번 문제 🎀</h2>
            <input
                type="text"
                value={input2}
                onChange={e => setInput2(e.target.value)}
                placeholder='첫 번째 문자 작성! 1️⃣'
            />
            <br/>
            <input
                type="text"
                value={input3}
                onChange={e => setInput3(e.target.value)}
                placeholder='두 번째 문자 작성! 2️⃣'
            />
            <br/>
            <button onClick={click2}>더 긴 문자열 출력 ☁️</button>
            <p>더 긴 문자열은 '{result2}' 입니다 ⭐️
            </p>
        </>
    );
}

export default App;
