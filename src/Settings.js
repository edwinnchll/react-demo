import React, { useState } from 'react';
import './Settings.css';

const SettingsPage = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);
  const [profileInfo, setProfileInfo] = useState({ name: 'John Doe', email: 'johndoe@example.com' });
  const [displayOptions, setDisplayOptions] = useState({ layout: 'grid', fontSize: 'medium' });
  const [privacyControls, setPrivacyControls] = useState({ dataSharing: 'enabled', visibility: 'public' });

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    // Add logic to update theme in the app
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Add logic to change app language
  };

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
    // Add logic to toggle notifications
  };

  const handleProfileUpdate = (newName, newEmail) => {
    setProfileInfo({ name: newName, email: newEmail });
    // Add logic to update profile information
  };

  return (
    <div className="SettingsPage">
      <h1>Settings</h1>
      <div className="SettingsSection">
        <h2>User Preferences</h2>
        <label className="SettingsLabel">Theme:</label>
        <select className="SettingsSelect" value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <br />
        <label className="SettingsLabel">Language:</label>
        <select className="SettingsSelect" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Add more language options */}
        </select>
        <br />
        <label className="SettingsLabel">Notifications:</label>
        <input className="SettingsInput" type="checkbox" checked={notifications} onChange={handleNotificationToggle} />
      </div>

      {/* Additional Interactive Feature */}
      <div className="SettingsSection">
        <h2>Profile Information</h2>
        <label className="SettingsLabel">Name:</label>
        <input type="text" value={profileInfo.name} onChange={(e) => handleProfileUpdate(e.target.value, profileInfo.email)} />
        <br />
        <label className="SettingsLabel">Email:</label>
        <input type="email" value={profileInfo.email} onChange={(e) => handleProfileUpdate(profileInfo.name, e.target.value)} />
      </div>

      {/* Add more sections for Display Options, Privacy Controls, etc. */}
    </div>
  );
};

export default SettingsPage;
