import React, { useState } from 'react';

function CardGame() {
    const [n, setN] = useState("");
    const [bundleLen, setBundleLen] = useState("");
    const [bundle, setBundle] = useState("");
    const [result, setResult] = useState("");

    const cardScore = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
    };

    const cardGameResult = () => {
        const num = parseInt(n);
        const len = parseInt(bundleLen);

        if (num < 1 || num > 25) {
            alert("1 이상 25 이하의 숫자여야 합니다 🥹");
            return;
        }

        if (len < 2 || len > 2 * num) {
            alert(`2 이상 ${2 * num} 이하의 숫자여야 합니다 🥹`);
            return;
        }

        if (bundle.length !== len) {
            alert(`길이가 카드뭉치의 길이(${len})와 일치해야 합니다 🥹`);
            return;
        }

        const isValidBundle = /^[abcde]+$/.test(bundle);
        if (!isValidBundle) {
            alert("카드 뭉치에는 반드시 a~e만 포함되어야 합니다 🥹");
            return;
        }

        let a = 0;
        let b = 0;

        for (let i = 0; i < 2 * num; i++) {
            const card = bundle[i];
            const score = cardScore[card];

            if (i % 2 === 0) {
                a += score;
            } else {
                b += score;
            }
        }

        let winner;

        if (a > b) {
            winner = [1, a];
        } else if (b > a) {
            winner = [2, b];
        } else {
            winner = [0, a];
        }

        setResult(winner);
    };

    return (
        <>
            <h2>♣️ ♦️ ♠️ 카드 게임 점수 계산 ♠️ ♦️ ♣️</h2>

            <div style={{ marginBottom: "10px" }}>
                <label>
                    1이상 25이하 뽑을 카드 🎴 개수를 정해주세요! (n) ➡️
                    <input
                        type="number"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>
                    2이상 2*n이하 카드 뭉치 🗂️ 길이를 정해주세요! (bundle_len) ➡️
                    <input
                        type="number"
                        value={bundleLen}
                        onChange={(e) => setBundleLen(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>
                     🃏카드 뭉치 a b c d e 중에서 골라 입력해주세요 ➡️
                    <input
                        type="text"
                        value={bundle}
                        onChange={(e) => setBundle(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>

            <button onClick={cardGameResult} style={{ padding: "10px", backgroundColor: 'black', color: 'white', borderRadius: "10px", cursor: 'pointer'}}>🤍 정답 확인 🤍</button>

            {result && (
                <div style={{ marginTop: "20px" }}>
                    <p>
                        {result[0] === 0
                            ? `무승부 ❗️❕ 점수는 ${result[1]} 입니다 ☁️`
                            : `${result[0] === 1 ? "A" : "B"} 승리 ❗❕ 점수는 ${result[1]} 입니다 ☁️`}
                    </p>
                </div>
            )}
        </>
    );
}

export default CardGame;
