const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    default: 'My School',
  },
  // Add other settings here in the future
});

// Create a single settings document if it doesn't exist
SettingsSchema.statics.getSettings = async function () {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

module.exports = mongoose.model('Settings', SettingsSchema);
