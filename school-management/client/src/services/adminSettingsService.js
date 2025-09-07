import axios from 'axios';

const API_URL = '/api/admin/settings/';

const getSettings = (token) => {
  return axios.get(API_URL, { headers: { 'x-auth-token': token } });
};

const updateSettings = (settingsData, token) => {
  return axios.put(API_URL, settingsData, { headers: { 'x-auth-token': token } });
};

const adminSettingsService = {
  getSettings,
  updateSettings,
};

export default adminSettingsService;
