import React, { useEffect } from 'react'
import './App.css';

export default function KakaoLogin() {

    // 카카오로그인 키값
    const KAKAO_JS_KEY = '';

    const handleLogin = ()=>{
        // 혹시 로그인을 해야되는데 카카오 객체가 안만들어졌다면 실행멈추기
        if(!window.Kakao){
            alert('카카오객체 정상적으로 만들어지지 않았습니다!');
            return ; //함수종료
        }

        // 위에 객체 생성되었다면 자동으로 로그인을 실행한다.
        // window.Kakao.Auth인증관련 기능(로그인,로그 아웃)
        // login() -> 로그인 할 수 있도록 팝업을 띄우는 함수
        //         => 로그인 성공하면 토큰을 자동으로 발급해줌
        window.Kakao.Auth.login({
            // 로그인 후에 어떤 정보를 받을 지 지정하는 목록
            scope : 'profile_nickname, profile_image',

            // 팝업이 실행되고 우리가 동의를 하면 로그인 성공이 되었다는 뜻으로
            success: function(authObj){
                console.log("로그인 성공!");
                console.log("응답받은 결과:",authObj);

                // 사용자 정보를 요청한다.
                window.Kakao.API.request({
                    url: '/v2/user/me', //필수값

                    success : function(resp){
                        console.log(resp);
                    },
                    fail : function (err){
                        console.log(err);

                    }
                });
            },
            fail :function(err){
                console.err("로그인 실패!");
            }
        });
    };

    //초기화
    useEffect(()=>{

        console.log(window.kakao);

        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_JS_KEY)  // 로그인에 관한 카카오객체 생성함
            console.log(' Kakao SDK 초기화 완료:', window.Kakao.isInitialized())
        }


    },[]);

    return (
        <div>kakaoLogin
            <button onClick={handleLogin} className="kakao-login-btn">
                카카오 로그인
            </button>

        </div>
    )
}
