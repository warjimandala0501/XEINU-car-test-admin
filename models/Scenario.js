const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  scenarioId: {
    type: String
  },
  type: {
    type: String
  },
  description: {
    type: String
  },
  goal: {
    type: String
  }
});

module.exports = mongoose.model('scenario', ScenarioSchema);
