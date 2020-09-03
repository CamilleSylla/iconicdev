import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
     <Particles 
        params={{ 
          "particles": { 
            "color": {
              "value": "#A6127E"
            },
            "number": { 
              "value": 150, 
              "density": { 
                "enable": true, 
                "value_area": 1000, 
              },
            },
            "line_linked": {
              "enable": false,
            },
            "size" : {
              "value": 5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 30,
              }
            },

          },
          "interactivity": {
            "detect_on": "canva",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              },
              "modes": {
                "bubble": {
                    "distance": 150,
                    "size": 30,
                    "duration": 2,
                    "opacity": 1,
                    "speed": 3
                },
              }
          } 
        } 
      }
      /> 
    </div>
  );
}

export default App;
