import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeComponent() {
  const [nama, setNama] = useState("Sallie Trixie Zebada Mansurina");
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="mt-5">
      <div style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-secondary">Welcome,</p>
              {nama && (
                <p style={{ lineHeight: "0.5em", fontSize: "2em" }}>{nama}</p>
              )}
            </div>
            <div className="col-md-12 mt-3">
              <p className="text-secondary">Aplikasi</p>
              <div className="col-md-3">
                <div className="card">
                  <Link
                    to="/verifikasi-data"
                    className="text-decoration-none text-dark"
                  >
                    <div className="card-body">
                      <div className="d-flex">
                        <FaRegCheckCircle size={50} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>Verifikasi data sekolah atau data siswa</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
