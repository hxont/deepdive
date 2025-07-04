import React from 'react';
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import BakeryBanner from "../components/BakeryBanner.jsx";

function Home(props) {
    return (
        <>
            <div>
                <Header />
                <BakeryBanner />
            </div>
        </>
    );
}

export default Home;
