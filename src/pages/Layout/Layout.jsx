import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ABOUTUS_PAGE_PATH,
  ALLCONTINENTS_PAGE_PATH,
  BLOG_PAGE_PATH,
  CONTACTS_PAGE_PATH,
  FAMILYTOURS_PAGE_PATH,
  REGISTRATION_PAGE_PATH,
  SIGNIN_PAGE_PATH,
  USER_INFO,
} from "../../routes/path";

import { selectUsersData } from "../../store/slices/usersData/usersDataSlice";

import { logOutUser } from "../../store/slices/usersData/API";

import HomePageFooter from "../HomePage/HomePageFooter/HomePageFooter";

import "./Layout.css";

const Layout = () => {
  const { currentUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checking = () => {
    if (currentUser?.id) {
      navigate(FAMILYTOURS_PAGE_PATH);
    } else {
      navigate(SIGNIN_PAGE_PATH);
    }
  };
  return (
    <div>
      <header className="main-header style-three">
        <div className="container">
          <div className="row align-items-center text-center justify-content-between">
            <div className="col-lg-auto d-flex align-items-center">
              <div className="logo-div">
                <img src="https://travio.smartdemowp.com/wp-content/themes/travio/assets/images/logo-3.png" alt="" />
              </div>
              <ul className="list-unstyled d-flex justify-content-between m-0 menu-part">
                <li className="nav-item ">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className={"nav-item"}>
                  <NavLink to={ALLCONTINENTS_PAGE_PATH} className="nav-link">
                    Destinations
                  </NavLink>
                </li>
                <li className={"nav-item"}>
                  <NavLink to={FAMILYTOURS_PAGE_PATH} className="nav-link">
                    Tours
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to={ABOUTUS_PAGE_PATH} className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to={BLOG_PAGE_PATH} className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to={CONTACTS_PAGE_PATH} className="nav-link">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item ">
                  {currentUser?.id ? (
                    <NavLink to={USER_INFO} className="nav-link">
                      UserInfo
                    </NavLink>
                  ) : (
                    <NavLink to={REGISTRATION_PAGE_PATH} className="nav-link">
                      Registration
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-lg-auto d-flex align-items-center">
              <div className="icon-div">
                <i className="fas fa-search"></i>
              </div>
              <div className="icon-div">
                {currentUser?.id ? (
                  <i className="bx bx-log-out" onClick={() => dispatch(logOutUser())} style={{ color: "#061a3a" }}></i>
                ) : (
                  <NavLink to={SIGNIN_PAGE_PATH}>
                    <i className="fa-regular fa-user"></i>{" "}
                  </NavLink>
                )}
              </div>
              <button className="btn-div" onClick={() => checking()}>
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      <HomePageFooter />
    </div>
  );
};

export default Layout;
