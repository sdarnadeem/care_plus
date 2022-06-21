import React, { useState } from "react";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";
import SnackbarComponent from "./../../reusableComponent/snackBar/SnackbarComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  return (
    <div>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  {page === 0 ? (
                    <LoginForm
                      email={email}
                      setEmail={setEmail}
                      setPage={setPage}
                      setOpenSnackbar={setOpenSnackbar}
                      setMessage={setMessage}
                      setSeverity={setSeverity}
                    />
                  ) : page === 1 ? (
                    <OtpForm
                      email={email}
                      setPage={setPage}
                      setOpenSnackbar={setOpenSnackbar}
                      setMessage={setMessage}
                      setSeverity={setSeverity}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
