import { Route, Routes } from "react-router-dom";
import {
  ABOUTUS_PAGE_PATH,
  AFRICA_PAGE_PATH,
  ALLCONTINENTS_PAGE_PATH,
  ASIA_PAGE_PATH,
  OCEANIA_PAGE_PATH,
  BLOG_PAGE_PATH,
  BOOKTOUR_PAGE_PATH,
  CONTACTS_PAGE_PATH,
  EUROPE_PAGE_PATH,
  FAMILYTOURS_PAGE_PATH,
  NORTHAMERICA_PAGE_PATH,
  REGISTRATION_PAGE_PATH,
  SIGNIN_PAGE_PATH,
  SOUTHAMERICA_PAGE_PATH,
  CHOOSEN_TOUR_ID,
  USER_INFO,
} from "./path";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import AfricaPage from "../pages/Destination/AfricaPage/AfricaPage";
import AllContinentsPage from "../pages/Destination/AllContinentsPage/AllContinentsPage";
import AsiaPage from "../pages/Destination/AsiaPage/AsiaPage";
import OceaniaPage from "../pages/Destination/OceaniaPage/OceaniaPage";
import EuropePage from "../pages/Destination/EuropePage/EuropePage";
import NorthAmericaPage from "../pages/Destination/NorthAmericaPage/NorthAmericaPage";
import SouthAmericaPage from "../pages/Destination/SouthAmericaPage/SouthAmericaPage";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "../pages/Layout/Layout";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import FamilyToursPage from "../pages/Tours/FamilyToursPage/FamilyToursPage";
import BookTour from "../pages/BookTour/BookTour";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsData } from "../store/slices/tripsData/API";
import DestinationLayout from "../pages/Destination/DestinationLayout/DestinationLayout";
import ChoosenTour from "../pages/Destination/ChoosenTour/ChoosenTour";
import { getCurrentUser, getUsersData } from "../store/slices/usersData/API";
import UserInfo from "../pages/UserInfo/UserInfo";
import { selectUsersData } from "../store/slices/usersData/usersDataSlice";
import { Navigate } from "react-router-dom";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUsersData);
  useEffect(() => {
    dispatch(fetchTripsData());
    dispatch(getUsersData());
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ALLCONTINENTS_PAGE_PATH} element={<DestinationLayout />}>
            <Route index element={<AllContinentsPage />} />
            <Route path={AFRICA_PAGE_PATH} element={<AfricaPage />} />
            <Route path={ASIA_PAGE_PATH} element={<AsiaPage />} />
            <Route path={OCEANIA_PAGE_PATH} element={<OceaniaPage />} />
            <Route path={EUROPE_PAGE_PATH} element={<EuropePage />} />
            <Route path={NORTHAMERICA_PAGE_PATH} element={<NorthAmericaPage />} />
            <Route path={SOUTHAMERICA_PAGE_PATH} element={<SouthAmericaPage />} />
            <Route path={CHOOSEN_TOUR_ID + "/:id"} element={<ChoosenTour />} />
          </Route>

          <Route path={FAMILYTOURS_PAGE_PATH} element={<FamilyToursPage />} />
          {/*change "pages" categery to "AboutUs" */}
          <Route path={ABOUTUS_PAGE_PATH} element={<AboutUsPage />} />
          <Route path={BLOG_PAGE_PATH} element={<BlogPage />} />
          <Route path={CONTACTS_PAGE_PATH} element={<ContactsPage />} />
          <Route path={REGISTRATION_PAGE_PATH} element={<RegistrationPage />} />

          {currentUser?.id ? (
            <Route path={USER_INFO} element={<UserInfo />} />
          ) : (
            <Route path={USER_INFO} element={<Navigate to={"/" + SIGNIN_PAGE_PATH} />} />
          )}
          {/*change "Elements" category to "SignIn" and put it to before booktour */}
          <Route path={SIGNIN_PAGE_PATH} element={<SignInPage />} />
          <Route path={BOOKTOUR_PAGE_PATH} element={<BookTour />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
