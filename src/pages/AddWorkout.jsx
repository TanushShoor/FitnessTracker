import { useState } from "react";
import { useWorkout } from "../WorkoutContext";

const AddWorkout = () => {
  // important below: -
  const { addWorkout } = useWorkout();

  const [exercise, setExercise] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!exercise.trim()) newErrors.exercise = "Exercise is required";
    if (!date) newErrors.date = "Date is required";
    if (!duration || duration <= 0)
      newErrors.duration = "Please enter valid Duration";
    if (!calories || calories <= 0)
      newErrors.calories = "Please enter valid Calories burnt";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newWorkout = { exercise, date, duration, calories, completed };
    await addWorkout(newWorkout);
    alert("Workout added successfully!");
    setExercise("");
    setDate("");
    setDuration("");
    setCalories("");
    setCompleted(false);
    setErrors({});
  };

  return (
    <div style={{backgroundColor: "black", height:"1000px", margin:"0px"}}>
        <form
        onSubmit={handleSubmit}
        style={{
            // margin: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize:"x-large",
            color:"white"
        }}
        >
        <label>Please Enter the Exercise</label><br />
        <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="Exercise"
            style={{ width: '300px', height: '40px', fontSize: '16px' }}
        />
        
        {errors.exercise && <div style={{ color: "red" }}>{errors.exercise}</div>}

        <br />
        <br />

        <label>Please Enter the Date</label><br />
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '300px', height: '40px', fontSize: '16px' }}
        />
        {errors.date && <div style={{ color: "red" }}>{errors.date}</div>}

        <br />
        <br />

        <label>Please Enter the duration of the Exercise</label><br />
        <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration (min)"
            style={{ width: '300px', height: '40px', fontSize: '16px' }}
        />
        {errors.duration && <div style={{ color: "red" }}>{errors.duration}</div>}

        <br />
        <br />

        <label>Please Enter the approx. no. of Calories Burnt</label><br />
        <input
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Calories"
            style={{ width: '300px', height: '40px', fontSize: '16px' }}
        />
        {errors.calories && <div style={{ color: "red" }}>{errors.calories}</div>}
        <br />
        <br />
        {/* <input value={completed} onChange={(e)} */}
        <button type="submit" style={{ width: '150px', height: '40px', fontSize: '16px' }}>Add Workout!</button>
        </form>
    </div>
  );
};
export default AddWorkout;
