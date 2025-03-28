import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";

import { useEffect } from "react";
import { Loader } from "lucide-react";
import useAuthStore from "./pages/store/authUser.js";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

	useEffect(() => {
		authCheck();
	}, [authCheck]);

	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}


  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={!user ?<LoginPage />: <Navigate to ={"/"}/>} />
          <Route path='/signup' element={!user ?<SignUpPage />: <Navigate to ={"/"}/>} />
        </Routes>
      
        <Footer />
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
