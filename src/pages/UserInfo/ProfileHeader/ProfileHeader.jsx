import React from 'react'

function ProfileHeader({currentUser}) {
  return (
    <div className='profile-header'>
      <div className='profile-img'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
          width='200'
          alt='Profile Image'
        />
      </div>
      <div className='profile-nav-info'>
        <h3 className='user-name'>
          {currentUser.firstName} {currentUser.lastName}
        </h3>
        <div className='address'>
        </div>
      </div>
      <div className='profile-option'>
        <div className='notification'>
          <i className='fa fa-bell'></i>
          <span className='alert-message'>3</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader
