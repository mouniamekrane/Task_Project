import { Route, Routes } from "react-router-dom"
import SignUp from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import TwoStepVerification from './pages/TwoStepVerification';
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";


const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="verification-form" element={<TwoStepVerification />} />
      </Route>
    </Routes>
  );
};

export default App;
