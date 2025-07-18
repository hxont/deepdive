import React, { useState } from 'react';

function Point() {
    const [point, setPoint] = useState("");
    const [result, setResult] = useState("");

    const usePoint = () => {
        const num = parseInt(point);
        if (isNaN(num) || num < 1000) {
            setResult("1000p이상 부터 사용 가능합니다 🥹");
            return;
        }

        let complete = 0;
        if (num >= 1000) {
            complete = parseInt(num / 100) * 100;
        }
        setResult(`${complete}p 포인트 사용 완료 💰️`);
    };

    return (
        <>
            <h2>사용할 포인트를 입력하세요 🎶</h2>
            <input
                style={{ padding: '5px', marginRight: '5px' }}
                type="number"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
            />
            <button onClick={usePoint} style={{ borderRadius: "10px", backgroundColor: 'black', color: 'white', padding: '5px' }}>사용</button>
            <p>{result}</p>
        </>
    );
}

export default Point;
