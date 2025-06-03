import React from "react";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Section Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4 max-w-3xl">
        {/* Profile Image */}
        <div className="relative w-20 h-20">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Marry Doe"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
            <img src="./camera.svg" className="w-4 h-4 text-white"/>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Marry Doe</h3>
          <p className="text-sm text-gray-600 mb-2">Marry@Gmail.Com</p>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;