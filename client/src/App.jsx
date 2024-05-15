import React from "react";
import "./App.css";
import Home from "./component/Home";
import Splash from "./component/Splash";
import Login from "./component/Login";
import Register from "./component/Register";
import Password from "./component/Password";
import Otp from "./component/Otp";
import Forget from "./component/Forget";
import OtpVerification from "./component/OtpVerification";
import CreatePassword from "./component/CreatePassword";
import Done from "./component/Done";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
      <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/splash" Component={Splash} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/password" Component={Password} />
            <Route path="/otp" Component={Otp} />
            <Route path="/forget" Component={Forget} />
            <Route path="/otpVerification" Component={OtpVerification} />
            <Route path="/createPassword" Component={CreatePassword} />
            <Route path="/done" Component={Done} />
        </Routes>
    );
}

export default App;

// <Router>
//       <ul>
//           <li>
//               <Link to="/">hm</Link>
//           </li>
//           <li>
//               <Link to="/splash">sp</Link>
//           </li>
//           <li>
//               <Link to="/login">lg</Link>
//           </li>
//       </ul>
//       <Switch>
//           <Route exact path="/">
//               <Home />
//           </Route>
//           <Route path="/splash">
//               <Splash />
//           </Route>
//           <Route path="/login">
//               <Login />
//           </Route>
//       </Switch>
//   </Router>