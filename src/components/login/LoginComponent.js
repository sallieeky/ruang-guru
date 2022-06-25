import React, { useEffect, useState } from "react";
import { CardBodyContent, Content, Title } from "./LoginStyled";
import { Link } from "react-router-dom";
const imgLogo = require("../../assets/images/login_logo.png");
const LoginComponent = () => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const [nisn, setNisn] = useState("");
  const [password, setPassword] = useState("");

  const nisnChange = (value) => {
    setNisn(value);
  };
  const passwordChange = (value) => {
    setPassword(value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
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
                        <label>NISN</label>
                        <input
                          value={nisn}
                          placeholder="NISN"
                          type={"text"}
                          className="form-control"
                          onChange={(value) => nisnChange(value.target.value)}
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
                        Login
                      </button>
                      <Link
                        to="/register"
                        className="text-center d-block mt-3"
                        style={{ textDecoration: "none" }}
                      >
                        Belum memiliki akun?
                      </Link>
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
