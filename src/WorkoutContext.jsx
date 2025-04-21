import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create Context
const WorkoutContext = createContext();

// 2. Create custom hook
export const useWorkout = () => {
    return useContext(WorkoutContext);
};

// 3. Create Provider
export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);

    // Fetch workouts when component mounts
    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const res = await fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts');
            const data = await res.json();
            setWorkouts(data);
        } catch (error) {
            console.error("Error fetching workouts:", error);
        }
    };

    // Function to add a workout
    const addWorkout = async (workout) => {
        try {
            const res = await fetch('https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workout),
            });
            const newWorkout = await res.json();
            setWorkouts(prev => [...prev, newWorkout]); // Update global state
        } catch (error) {
            console.error("Error adding workout:", error);
        }
    };

    // You can also add delete/edit methods later here
    const deleteWorkout = async (id) => {
        await fetch(`https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts/${id}`, {
            method: 'DELETE',
        });
        setWorkouts((prev) => prev.filter((w) => w.id !== id));
    };

    const updateWorkout = async (id, updatedWorkout) => {
        const response = await fetch(`https://68055964ca467c15be68e2fb.mockapi.io/fitnessdata/api/workouts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWorkout),
        });
    
        const data = await response.json();
    
        setWorkouts((prev) =>
            prev.map((w) => (w.id === id ? data : w))
        );
    };

    return (
        <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout, updateWorkout }}>
            {children}
        </WorkoutContext.Provider>
    );
};
