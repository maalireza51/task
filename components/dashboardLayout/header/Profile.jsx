import { useState } from "react";

const Profile = () => {
  return (
    <div className="inline-block">
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex mx-5 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="/taskImg.jpg"
          alt="user photo"
        />
      </button>
    </div>
  );
};

export default Profile;
