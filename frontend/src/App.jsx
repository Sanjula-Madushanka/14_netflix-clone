import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./pages/store/authUser.jsx";
import { useEffect } from "react";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

	useEffect(() => {
		authCheck();
	}, [authCheck]);


  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      
        <Footer />
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
