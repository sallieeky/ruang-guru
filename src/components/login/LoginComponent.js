import React, { useState } from "react";
import { CardBodyContent, Content, Title } from "./LoginStyled";
const imgLogo = require("../../assets/images/login_logo.png");
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (value) => {
    setEmail(value);
  };
  const passwordChange = (value) => {
    setPassword(value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Email : " + email);
    console.log("Password : " + password);
  };

  return (
    <Content>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <CardBodyContent>
                  <div className="text-center">
                    <img src={imgLogo} width={100} />
                    <Title>
                      Sistem Informasi Pendaftaran Siswa <br />
                      SIDASI
                    </Title>
                  </div>
                  <div>
                    <form>
                      <div className="form-group my-3">
                        <label>Email address</label>
                        <input
                          value={email}
                          placeholder="Email Address"
                          type={"email"}
                          className="form-control"
                          onChange={(value) => emailChange(value.target.value)}
                        />
                      </div>
                      <div className="form-group my-3">
                        <label>Password</label>
                        <input
                          value={password}
                          placeholder="Password"
                          type={"password"}
                          className="form-control"
                          onChange={(value) =>
                            passwordChange(value.target.value)
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={clickHandler}
                        style={{ backgroundColor: "#4a85a9" }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </CardBodyContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default LoginComponent;
