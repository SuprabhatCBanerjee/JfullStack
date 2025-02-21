import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";

function App() {


  return (
    <>
     
      <Background></Background>
      <div style={styles.block}>
      {/* <DashBoard/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      {/* <SinglePage/> */}
      {/* <AllComponents></AllComponents> */}
      {/* <HomePage/> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/spa" element={<SinglePage />} />
        </Routes>
      </Router>

      </div>
      
    </>
  )
}

export default App


const styles = {
  block:{
    background:"#ffffff",
    width: "90%",
    margin: "0 auto",
    height: "90vh",
    position: "relative",
    boxShadow: "0 0 25px rgba(0,0,0,0.15)",
    top: "5vh",
    borderRadius: "10px",
    overflow:"hidden",
    // padding: "5px",
  }
};