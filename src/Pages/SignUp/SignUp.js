import React, { Component } from "react";
import "./SignUp.scss";

const SERVER_IP = "http://10.58.2.153:8000";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      password: "",
      confirm_password: "",
      name: "",
      nickname: "",
      email: "",
      phone_number: "",
      address: "",
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleID = (event) => {
    this.setState({
      user_id: event.target.value,
    });
  };

  //아이디 input 에 값이 입력되는지 확인하는 코드
  handlePassword = (event) => {
    // if (event.keyCode === 9) {
    this.setState({
      password: event.target.value,
    });
    // }
  };

  // 비밀번호 input에 값이 입력되는지 확인하는 코드
  handleConfirmPassword = (event) => {
    this.setState({
      confirm_password: event.target.value,
    });
  };

  // 입력했던 비밀번호와 같은지 확인하는 코드
  handleComparePassword = (event) => {
    //console.log(event.keyCode);
    if (event.keyCode === 9) {
      //console.log("지원");
    }
    // if (event.key === "Enter" || event.key === "Tab") {
    //   this.state.password === this.state.compare_password
    //     ? this.setState({ compare_password: "" })
    //     : this.setState({ compare_password: "비밀번호가 맞지 않습니다" });
    // }
  };
  //입력된 값을 state에 저장해주기

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //비밀번호&비밀번호 확인이 일치하는지 확인해서 ture or false 를 반환한다.
  doesPasswordMatch() {
    const { password, confirm_password } = this.state;
    return password === confirm_password;
  }

  //패스워드가 일치하는지 확인해서 유저에게 피드백을 준다.
  // renderFeedbackMessage() {
  //   const { password, confirm_password } = this.state;

  //   if (comfirm_password) {
  //     if (!this.doesPasswordMatch()) {
  //       return (
  //         <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
  //       );
  //     }
  //   }
  // }

  // //비밀번호&비밀번호 확인이 일치하는지 확인해서 알려준다.
  // doesPasswordMatch() {
  //   const { password, comfirm_password } = this.state;
  //   return password === confirm_password;
  // }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // 이름 input 에 값이 입력되는지 확인하는 코드
  handleNickName = (event) => {
    this.setState({
      nickname: event.target.value,
    });
  };

  // 닉네임 input 에 값이 입력되는지 확인하는 코드
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  // email input 에 값이 입력되는지 확인하는 코드
  handlephone_number = (event) => {
    this.setState({
      phone_number: event.target.value,
    });
  };

  // phonenumner input 에 값이 입력되는지 확인하는 코드
  handleAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  // 주소 input 에 값이 입력되는지 확인하는 코드
  // handleaddEnter = (event) => {
  //   if (event.key === "Enter") {
  //     this.handleButton();
  //   }
  // };

  handleButton = () => {
    // post
    fetch(`${SERVER_IP}/user/signup`, {
      // fetch 인자의 첫 번째 인자는 api 주소고, 두 번째 인자는 객체 형태이고
      method: "POST", // 메소드 뒤에 포스트를 스트링으로 적어줘야 하는데, get은 디폴트 값이 원래 있어서 안 써줘도 됨.
      body: JSON.stringify({
        // body를 json화 시켜서 보내줘야 함. 토큰이 들어오면 json body에 들어옴.
        user_id: this.state.user_id,
        password: this.state.password,
        name: this.state.name,
        nickname: this.state.nickname,
        email: this.state.email,
        phone_number: this.state.phone_number,
        address: this.state.address,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("res >>> ", res));
  };

  render() {
    // console.log("state >>>", this.state);
    return (
      <div className="SignUp">
        <div className="title">
          <div className="titlea">
            <span className="titleatext">JOIN US</span>
          </div>

          <div className="titleb">
            <div className="titlebbox">
              <span className="agree"> 약관동의</span>
              <span className="this"> 정보입력 </span>
              <span className="end">가입완료</span>
            </div>
          </div>
          <div className="memberinfo">
            <div className="memberinfohead">
              <span className="infotext">기본정보</span>
              <span className="infostar">
                🟥표시는 반드시 입력하셔야 하는 항목입니다.
              </span>
              <div className="form">
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">아이디</span>
                  <input
                    onChange={this.handleID}
                    className="inputbox"
                    type="text"
                  />
                </div>
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">비밀번호</span>
                  <input
                    onChange={this.handlePassword}
                    onKeyUp={this.handleComparePassword}
                    className="inputbox"
                    type="password"
                  />
                  <div className="pwderrormessage">
                    {/* {this.state.password.length < 10
                      ?  this.state.password.length > 4
                        "최소 10 이상 입력해주세요."
                      : ""} */}
                  </div>
                </div>
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">비밀번호 확인</span>
                  <input
                    onChange={this.handleConfirmPassword}
                    className="inputbox"
                    type="password"
                  />
                  <span>{this.state.compare_password}</span>
                </div>
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">이름</span>
                  <input
                    onChange={this.handleName}
                    className="inputbox"
                    type="text"
                  />
                </div>
                <div className="box">
                  <span className="text_nick">닉네임</span>
                  <input
                    onChange={this.handleNickName}
                    className="inputbox"
                    type="text"
                  />
                </div>
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">이메일</span>
                  <input
                    onChange={this.handleEmail}
                    className="inputboxa"
                    type="text"
                  />
                  {/* <input className="inputboxb" type="text" /> */}
                  <select
                    className="email_select"
                    aria-required="true"
                    aria-label="Select product"
                    name="email"
                  >
                    <option>직접입력</option>
                    <option>LUSH SPA</option>
                  </select>
                  <div className="agree_checkbox">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value="y"
                      aria-invalid="false"
                    />
                    <label for="maillingFl" class="">
                      정보/이벤트 메일 수신에 동의합니다.
                    </label>
                  </div>
                </div>
                <div className="box">
                  <span className="red">🟥</span>
                  <span className="text">휴대폰번호</span>
                  <input
                    onChange={this.handlephone_number}
                    className="inputbox"
                    type="text"
                    placeholder="  -없이 입력하세요"
                  />
                  <div className="agree_checkbox">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value="y"
                      aria-invalid="false"
                    />
                    <label for="maillingFl" class="">
                      정보/이벤트 SNS 수신에 동의합니다.
                    </label>
                  </div>
                </div>
                <div className="addressbox">
                  <div className="addressboxa">
                    <span className="text_address">주소</span>
                    <input
                      onChange={this.handleAddress}
                      className="inputboxa"
                      type="text"
                    />
                    <div className="searchfor_zip_box">
                      <div className="searchfor_zip">
                        <p className="searchfor_zip_text">우편번호검색</p>
                      </div>
                    </div>
                  </div>
                  <div className="addressboxb">
                    <div className="address" type="text">
                      <input className="inputboxc" type="text" />
                      <input className="inputboxc" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonbox">
                <button
                  onClick={this.handleButton}
                  type="submit"
                  className="loginbtn"
                >
                  <p className="signup_text">회원가입</p>
                </button>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default SignUp;
