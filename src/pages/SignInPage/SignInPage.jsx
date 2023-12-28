import { useDispatch, useSelector } from "react-redux";

import "./signInPage.css";
import { login, selectUsersData } from "../../store/slices/usersData/usersDataSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(selectUsersData);

  useEffect(() => {
    if (currentUser?.id) {
      navigate("/userInfo");
    }
  }, [currentUser?.id]);

  const handlerLogin = (e) => {
    e.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    const user = { email, password };
    dispatch(login(user));
  };

  return (
    <div>
      <div className="signInTitle">
        <h1>Sign In</h1>
      </div>
      <div className="signInHeader">
        <h3>Sign In</h3>
        <h1>Connect with us for Better Tour</h1>
      </div>
      <form className="signInForm" onSubmit={handlerLogin}>
        <h3>Sign In with</h3>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button className="signInBtn">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
