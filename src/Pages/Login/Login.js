import React, { Component } from "react";
import icon_id from "./Images/icon_id.png";
import icon_password from "./Images/icon_password.png";
import logo_naver_n from "./Images/logo-naver_n.gif";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      password: "",
    };
  }

  //componentDidMount() {}
  //내가 정의한 메소드(함수) 중에서 가장 먼저 실행되는 함수이다.

  handleID = (event) => {
    // console.log("input에 id 값이 입력되는지 확인", event.target.vaule);
    this.setState({
      user_id: event.target.value,
    });
  };

  handlePassword = (event) => {
    // console.log("input에 password 값이 입력되는지 확인", event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handlePasswordEnter = (event) => {
    if (event.key === "Enter") {
      this.handleButton();
    }
  };

  handleButton = () => {
    // post
    fetch("http://10.58.0.189:8000/user/signin/", {
      // fetch 인자의 첫 번째 인자는 api 주소고, 두 번째 인자는 객체 형태이고
      method: "POST", // 메소드 뒤에 포스트를 스트링으로 적어줘야 하는데, get은 디폴트 값이 원래 있어서 안 써줘도 됨.
      body: JSON.stringify({
        // body를 json화 시켜서 보내줘야 함. 토큰이 들어오면 json body에 들어옴.
        user_id: this.state.user_id,
        password: this.state.password,
      }),
    }).then((res) => res.json());
  };

  //state = {};
  render() {
    return (
      <div className="Login">
        <div className="content">
          <div className="member">
            <h2>로그인</h2>
            <div className="box">
              <div id="tabs">
                <div className="ntab01">
                  <div className="choice">
                    <span href="" className="selected_a">
                      회원
                    </span>
                    <span herf="" className="selected_b">
                      비회원
                    </span>
                  </div>
                  <div className="formLogin">
                    <div className="login">
                      <div className="input-info">
                        <div className="inp_login">
                          <span className="icon">
                            <img src={icon_id} alt="아이디" />
                          </span>
                          <input
                            onChange={this.handleID}
                            type="text"
                            className="loginId_text"
                            //name="loginId_text"
                            //value="아이디"
                            placeholder="아이디"
                            // required="true"
                            // aria-required="true"
                          />
                        </div>
                        <div>
                          <div className="inp_login">
                            <span className="icon">
                              <img src={icon_password} alt="비밀번호좌물쇠" />
                            </span>
                            <input
                              onChange={this.handlePassword}
                              onKeyPress={this.handlePasswordEnter}
                              type="password"
                              className="loginPwd_text"
                              //name="loginPwd"
                              //value=""
                              placeholder="비밀번호"
                              //required="true"
                              //aria-required="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="save">
                        <input
                          type="checkbox"
                          className="checkbox"
                          //name="saveId"
                          value=""
                          checked=""
                        />
                        <div className="on">아이디 저장</div>
                      </div>
                      <button
                        onClick={this.handleButton}
                        type="submit"
                        className="loginbtn"
                      >
                        <p>로그인</p>
                      </button>
                      <div className="loginmenu">
                        <button type="button" className="skinbtn ">
                          <p>회원가입</p>
                        </button>
                        <button type="button" className="skinbtn">
                          <p>아이디 찾기</p>
                        </button>
                        <button type="button" class="skinbtn">
                          <p>비밀번호 찾기</p>
                        </button>
                      </div>
                    </div>
                    <div className="naverloginbox">
                      {/* <div className="naverlogin"> */}
                      {/* href="#"
                        data-naver-url="https://socialmember.godo.co.kr/NaverLogin/naver_api.php?mode=login&amp;response_type=code&amp;client_id=0Q8wjCNa7cJS0AvkCJEQ&amp;redirect_uri=https%3A%2F%2Flush.co.kr%2F&amp;state=9a9b87f8cf176066bf8e9c73ee6222b3" */}
                      <img
                        src={logo_naver_n}
                        className="naverlogoimg"
                        alt="네이버"
                      />
                      <p className="naverlogintext">네이버 아이디로 로그인</p>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
