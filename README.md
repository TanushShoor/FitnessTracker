# FitTrack - Your fitness tracker

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Description: -
These days, people do not work out regularly. As workout sessions increase, it becomes difficult to keep track of the PR (Personal record) of the sets and reps performed per exercise. Because of this, they are confused about where to start from and how many reps or sets should be increased next time. Hence, to resolve this problem, an application designed to cater to the user's needs can provide the solution.

This is a fitness tracker that will keep a record of the physical activities you perform. It will record the duration, date, name of the exercise, and the number of calories burned. It will add the workout details to the dashboard so that you can tick it and mark it as completed when done with your workout. It also has the option of a delete button, which is for the facility if you added the wrong workout details by chance.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Features: -

Home Page (named FitTrack): It is simply a welcome page from where the user will start their journey of maintaining their fitness.

Dashboard: It has all the goal exercises that the user sets according to their needs. Each exercise contains a check box, which can be checked off as the user finishes their workout. As the boxes are checked, the exercise is marked from "Not Completed" to "Completed." This also boosts the user's enthusiasm to help them achieve their dream physique.

About Page: This page contains the aim of the website, what this website does, and how it can help the user to become physically active and fit.

History: It maintains the record of all the past workout sessions that the user has had.

Add Workout: This page contains a form that the user fills out to add their workout. It contains fields like the name of the exercise, Date, Duration, and the targeted number of calories. It is automatically marked as "Not Completed" and shows up on the Dashboard of the user. From there, the user can delete it or mark it as completed.

Form Validation: This is used in the Add Workout page so that the user enters valid data.
Use of props, conditional rendering, lists, and forms in the AddWorkout, Dashboard, and History pages.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Tech-Stack: -
* Frontend: React, Vite
* React.js (Functional Components + Hooks): useState and useEffect are used in functional components using Hooks
* Styling: Custom CSS (refer to styles.css and App.css)
* State Management: use of Context API (refer to the file named WorkoutContext.jsx, which fetches the data of the user, and its methods are used by other pages such as Dashboard, Add Workout, and History)
* Deployment: Vercel 
* API Call: Using MockAPI, the data of the exercises is stored.
* React Router: This is used for navigation when the person goes from one page to another using the Navigation Bar without reloading the page. It is used to navigate to all the pages such as Dashboard, History, About, and Add Workout.
* Version Control: Git & GitHub
  
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Set up Instructions (For Developers): - 
1. Clone the repository: 
git clone https://github.com/TanushShoor/FitnessTracker.git<br>
cd fitness-tracker

2. Install dependencies: npm install

3. Run the app: npm run dev

4. Open in browser: http://localhost:5173

# User Instructions (for users): -
1. Open the app: fitness-tracker-five-self.vercel.app
2. Track Workouts: Use the home screen to add new exercises and track your sessions.
3. Daily Log: View your workout history and keep track of your fitness journey.
4. Responsive Design: Works well on both mobile and desktop.
5. Clean UI: Simple and distraction-free layout for better focus.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Home page (named FitTrack)
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/19a3a364-f502-4700-a90c-ef7e1b093baf" />

# Dashboard
<img width="1511" alt="image" src="https://github.com/user-attachments/assets/96542966-09c6-4845-9f61-0e698b04fc69" />

# About page
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/9fe42d38-f06b-4cb0-9cb5-1b3077948031" />
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/b7c7cbc9-d530-4b31-9128-025287e6be7f" />

# History
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/5c8aa444-d702-420f-b429-5b61680ee278" />

# Add Workout page
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/7d488ce0-86a3-4508-8e97-56275884303b" />

* If you try to input the wrong data into the fields
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/1c97ef20-44fd-47fd-9f64-4c585c883f4c" />




