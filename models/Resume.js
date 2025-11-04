const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  dob: String,
  linkedin: String,
  github: String,
  behance: String,
  about: String,

  education: [
    {
      course: String,
      institution: String,
      duration: String,
      location: String,
    }
  ],

  languages: [String],
  interests: [String],
  programming_languages: [String],
  skills: [String],
  tools: [String],

  experiences: [
    {
      title: String,
      company: String,
      duration: String,
      description: String,
      link: String
    }
  ],

  projects: [
    {
      title: String,
      duration: String,
      description: [String],
      frontend: String,
      backend: String,
      link: String
    }
  ],

  declaration: String,
  signature: String
});

module.exports = mongoose.model('Resume', resumeSchema);
