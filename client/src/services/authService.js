import { toast } from "react-toastify";
import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return toast.info("Please Provide All Fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organizationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organizationName,
        address,
        hospitalName,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
