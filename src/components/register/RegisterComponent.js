import React, { useState } from "react";
import { CardBodyContent, Content, Required, Title } from "./RegisterStyled";
import { Link } from "react-router-dom";
const imgLogo = require("../../assets/images/login_logo.png");

const RegisterComponent = () => {
  return (
    <Content>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <img src={imgLogo} width={100} />
                  <Title>
                    Sistem Informasi Pendaftaran Siswa (SIDASI)
                    <br />
                    <span className="text-dark">
                      Formulir Registrasi Akun Siswa
                    </span>
                  </Title>
                </div>
              </div>
              <div className="card-body">
                <p>
                  Untuk mendapatkan akun siswa, masukkan kombinasi{" "}
                  <strong>NISN, NPSN, dan Tanggal Lahir</strong>.
                </p>
                <p>
                  Untuk siswa <strong>Luar Negeri</strong> yang berasal dari{" "}
                  <strong>sekolah non SRI (Sekolah Rakyat Indonesia)</strong>{" "}
                  dapat menggunakan <strong>NPSN 69999999</strong>.
                </p>

                <form>
                  <form>
                    <div className="form-group my-3">
                      <label>
                        NISN
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        placeholder="NISN"
                        type={"text"}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group my-3">
                      <label>
                        NPSN
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        placeholder="NPSN"
                        type={"text"}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group my-3">
                      <label>
                        Tanggal Lahir
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        placeholder="dd/mm/yyyy"
                        type={"date"}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link to="/login" className="btn btn-danger w-25">
                        Kembali
                      </Link>
                      <button className="btn btn-primary w-25">
                        Selanjutnya
                      </button>
                    </div>
                    <p>
                      Sudah memiliki akun?
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        &nbsp;Login
                      </Link>
                    </p>
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default RegisterComponent;
