import React from 'react';
import backgroundImage from '/people-working-out-indoors-together-with-dumbbells.jpg';
function Home(){
    return(
        <div className='home-container'>
            {/* <img src ="" alt="" style={{width:"500px"}}/> */}
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="content-overlay">
                <h1 style={{color:"#ff6600"}}>Welcome to FitTrack</h1>
                <p style={{fontSize:"30px", marginTop:"10px"}}>Your personal fitness tracker</p>
                <h2 style={{fontSize:"30px", marginTop:"10px"}}>Track your workouts and stay fit!</h2>
                <h3 style={{fontSize:"30px", marginTop:"10px"}}>Get started today!</h3>
                <h4 style={{fontSize:"30px", marginTop:"10px"}}>Join us in achieving your fitness goals!</h4>
                <p style={{fontSize:"30px", marginTop:"10px"}}>Track your workouts and stay fit!</p>
            </div>
        </div>
    );
}
export default Home;