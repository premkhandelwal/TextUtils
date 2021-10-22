// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";





// export default function Navbar(props) {
  
 
 
 
 
 
 
 
 
//   const [styleBlue, setBlueButtonStyle] = useState({ height: '30px', width: '30px', cursor: 'pointer' });
//   const [styleGreen, setGreenButtonStyle] = useState({ height: '30px', width: '30px', cursor: 'pointer' });
//   const [styleRed, setRedButtonStyle] = useState({ height: '30px', width: '30px', cursor: 'pointer' });
//   const [styleYellow, setYellowButtonStyle] = useState({ height: '30px', width: '30px', cursor: 'pointer' });


//   /* let setStyle = (color) => {
//     setBlueButtonStyle({ height: '30px', width: '30px', cursor: 'pointer' });
//     setGreenButtonStyle({ height: '30px', width: '30px', cursor: 'pointer' });
//     setRedButtonStyle({ height: '30px', width: '30px', cursor: 'pointer' });
//     setYellowButtonStyle({ height: '30px', width: '30px', cursor: 'pointer' });
//     if (color === 'blue') {
//       setBlueButtonStyle({ height: '30px', width: '30px', cursor: 'pointer', border: "5px solid black",  })
//       props.toggleMode('primary')
//     } else if (color === 'green') {
//       setGreenButtonStyle({ height: '30px', width: '30px', cursor: 'pointer', border: "5px solid black" })

//     } else if (color === 'yellow') {
//       setYellowButtonStyle({ height: '30px', width: '30px', cursor: 'pointer', border: "5px solid black" })

//     } else {
//       setRedButtonStyle({ height: '30px', width: '30px', cursor: 'pointer', border: "5px solid black" })

//     }
//   } */



//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">{props.title}</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">{props.about}</Link>
//             </li>
//           </ul>
//           {/* <div className="mx-3">

//             <h6 onClick={colorScheme}>Choose Color Scheme</h6>
//             { showPallete 
//                     ? <div className="btn-group" role="group" aria-label="Basic mixed styles example">
//                     <button type="button" style={{ "backgroundColor": "red" }} onClick={()=>props.buttonPressed("red")}>Red</button>
//                     <button type="button" style={{ "backgroundColor": "yellow" }} onClick={()=>props.buttonPressed("yellow")}>yellow</button>
//                     <button type="button" style={{ "backgroundColor": "blue" }} onClick={()=>props.buttonPressed("blue")} >Blue</button>
//                   </div>
//                     : null
//                 }

//           </div> */}
//           <div className="d-flex">
//             <div className="bg-primary rounded mx-2" id="blue" onClick={() => {
//               props.toggleMode('primary')
//               setStyle('blue');
//             }} style={styleBlue}></div>
//             <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success');  setStyle('green'); }} style={styleGreen}></div>
//             <div className="bg-warning rounded mx-2" onClick={() => { setStyle('yellow'); props.toggleMode('warning') }} style={styleYellow}></div>
//             <div className="bg-danger rounded mx-2" onClick={() => { setStyle('red'); props.toggleMode('danger') }} style={styleRed}></div>
//           </div>
//           <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//             <input className="form-check-input" onClick={() => null} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
//           </div>
//           {/* <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-primary" type="submit">Search</button>
//       </form> */}
//         </div>
//       </div>
//     </nav>
//   )
// }

// Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string };

// Navbar.defaultProps = { title: "Set title here", about: "About" }

   
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
