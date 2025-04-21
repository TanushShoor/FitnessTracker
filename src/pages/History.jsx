import { useWorkout } from '../WorkoutContext';

const History =()=>{
    const {workouts} = useWorkout();

    return(
        <div id="container" style={{margin:0}}>
            <ul id = "list" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1 >History</h1>
                {workouts.map((w)=>(
                    <li key={w.id}>
                        <strong>{w.exercise}</strong> on {w.date} - {w.duration} min - {w.calories} cal - 
                        {w.completed ? " Completed" : " Not Completed"}
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        
        </div>
    )
}
export default History;


// import {useState, useEffect} from 'react';

// function History(){
//     const [workouts, setWorkouts] = useState([]);

//     useEffect(()=>{
//         fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts')
//         .then( res => res.json())
//         .then( data => setWorkouts(data));
//     },[]);

//     return(
//         <>
//             <h1>Workout History</h1>
//             <ul>
//                 {workouts.map((workout)=>(
//                     <li key={workout.id}>
//                         {workout.exercise} - {workout.date} - {workout.duration}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }
// export default History;