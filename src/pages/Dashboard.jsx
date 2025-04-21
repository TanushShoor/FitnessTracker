
import { useWorkout } from "../WorkoutContext";
import './dashboard.css'
const DashBoard=()=>{
    const { workouts, updateWorkout, deleteWorkout } = useWorkout();

    const handleCheckboxChange = (workout) => {
        const updatedWorkout = {
            ...workout,
            completed: !workout.completed
        };
        updateWorkout(workout.id, updatedWorkout);
    };
    return(
        <div id="container">
            <div id="list" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1>Total Workouts : {workouts.length}</h1>
                <ul>
                    {workouts.map((w) => (
                        <li key={w.id} style={{ marginBottom: '10px' }}>
                        <input 
                            type="checkbox" 
                            checked={w.completed} 
                            onChange={() => handleCheckboxChange(w)}
                            />
                            {w.exercise} on {w.date} - {w.duration} min - {w.calories} cal - 
                            {w.completed ? " Completed" : " Not Completed"}
                            <button 
                            onClick={() => deleteWorkout(w.id)} 
                            style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red', border: 'none', borderRadius: '5px', padding: '4px 8px' }}
                            >
                            Delete
                            </button>
                        </li>
                        ))}
                </ul>
            </div>

        </div>
    )
}

export default DashBoard;

// // import {useState, useEffect} from 'react';

// // const Dashboard=()=>{
// //     const [workouts, setWorkouts] = useState([]);

// //     // const [completed, setCompleted] = use

// //     useEffect(()=>{
// //         fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts')
// //         .then((res)=> res.json())
// //         .then((data)=> setWorkouts(data))
// //     },[]);

// //     const handleCheck = async(id) =>{
// //         await fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts',{
// //             method:'PUT',
// //             headers: {'Content-Type':'application/json'},
// //             body: JSON.stringify({completed: true}),
// //         });
// //         setWorkouts(prev=> prev.filter(workout=> workout.id !== id));
// //     };

// //     const handleDelete = async(id)=>{
// //         await fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts',{
// //             method:"DELETE",
// //         });
// //         setWorkouts(prev =>prev.filter(workout => workout.id!== id));
// //     }

// //     // const handleEdit =()=>{}

// //     return(
// //         <div>
// //             <h1>Your Workouts</h1>
// //             <ul>
// //                 {workouts.map((workout)=>(
// //                     <li key={workout.id}>
// //                         <input type="checkbox" onClick={()=>handleCheck(workout.id)}/>
// //                         {workout.exercise} - {workout.duration} minutes on {workout.date}
// //                         <button onClick={() => handleDelete(workout.id)}>Delete</button>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };
// // export default Dashboard;