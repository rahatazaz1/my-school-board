import React, { useState, useEffect, useContext } from 'react';
import adminSettingsService from '../services/adminSettingsService';
import AuthContext from '../context/AuthContext';

const SettingsForm = () => {
  const { user } = useContext(AuthContext);
  const [settings, setSettings] = useState({ schoolName: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await adminSettingsService.getSettings(user.token);
        setSettings(response.data);
      } catch (err) {
        console.error('Failed to fetch settings', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, [user]);

  const onChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminSettingsService.updateSettings(settings, user.token);
      alert('Settings updated successfully');
    } catch (err) {
      console.error('Failed to update settings', err);
    }
  };

  if (loading) {
    return <div>Loading settings...</div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Application Settings</h3>
      <div>
        <label>School Name</label>
        <input
          type="text"
          name="schoolName"
          value={settings.schoolName}
          onChange={onChange}
        />
      </div>
      <input type="submit" value="Save Settings" />
    </form>
  );
};

export default SettingsForm;
