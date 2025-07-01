import React from 'react';
import LeftSection from "../components/LeftSection.jsx";
import RightSection from "../components/RightSection.jsx";

function MainPage() {
    return (
        <div className="flex h-screen">
            {/* 왼쪽 영역 */}
            <div className="w-1/2 justify-center">
                <LeftSection />
            </div>

            {/* 오른쪽 영역 */}
            <div className="w-1/2 flex items-center justify-center">
                <RightSection />
            </div>
        </div>

    );
}

export default MainPage;
