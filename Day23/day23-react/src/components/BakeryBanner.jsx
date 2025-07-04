import React, {useState} from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import './index.css';

export default function BakeryBanner() {
    const [selected, setSelected] = useState('음료');

    return (
        <div className="banner">
            <Container className="text-box">
                <span className="title">베이커리</span>
                <p className="subtitle">
                    ALWAYS BESIDE YOU,
                <strong>EDIYA BAKERY</strong>
                </p>

                <ButtonGroup>
                    <Button
                        className="px-5"
                        variant="light"
                        active={selected === '음료'}
                        onClick={() => setSelected('음료')}
                    >
                        음료
                    </Button>

                    <Button
                        className="px-5"
                        variant="light"
                        active={selected === '푸드'}
                        onClick={() => setSelected('푸드')}
                    >
                        푸드
                    </Button>

                    <Button
                        className="px-5"
                        variant="light"
                        active={selected === 'MD'}
                        onClick={() => setSelected('MD')}
                    >
                        MD
                    </Button>
                </ButtonGroup>
            </Container>
        </div>
    );
}
