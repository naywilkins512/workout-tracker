const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({


  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
      {
          type: {type: String, required: true},
          name: {type: String, required: true},
          duration: {type: Number, required: true},
          weight: {type: Number, required: false},
          reps: Number,
          sets: Number,
          distance: Number
      }
  ]


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// day: new Date().setDate(new Date().getDate()-10),
// exercises: [
//   {
//     category: "resistance",
//     name: "Bicep Curl",
//     duration: 20,
//     weight: 100,
//     reps: 10,
//     sets: 4
//   }
// ]