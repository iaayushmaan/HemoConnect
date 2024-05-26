import React, { useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  useEffect(() => {
    const notify = () =>
      toast.info("Check console for Demo Account credentials");
    console.log(
      "Role : Organization\nEmail: redcross@org.in\nPassword: 12345678"
    );
    notify();
  }, []);

  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.gif" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
