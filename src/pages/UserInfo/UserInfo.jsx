import React from "react";

import "./userInfo.css";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/usersDataSlice";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MainBd from "./Main-Bd/MainBd";

export default function UserInfo() {
  const { currentUser } = useSelector(selectUsersData);
  return (
    <section>
      <div className='section-inner'>
        <ProfileHeader currentUser={currentUser} />
        <MainBd currentUser={currentUser} />
      </div>
    </section>
  );
}
