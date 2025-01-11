import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "@/pages/Auth/Signup";
import Login from "@/pages/Auth/Login";
import ForgetPassword from "@/pages/Auth/ForgetPassword";
import VerifyPassword from "@/pages/Auth/VerifyPassword";
import ResetPassword from "@/pages/Auth/ResetPassword";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import Layout from "@/components/dashboard/Layout";
import Home from "@/pages/Home";
import RecentActivity from "@/pages/RecentActivity";
import Profile from "@/pages/Profile";
import Blocks from "@/pages/Blocks";
import ConcreteWorks from "@/pages/ConcreteWorks";
import Fillings from "@/pages/Fillings";
import BillOfQuantities from "@/pages/BillOfQuantities";
import MarketPlace from "@/pages/MarketPlace";
import Tiles from "@/pages/Tiles";
import Landing from "./pages/website/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/verifyPassword" element={<VerifyPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/" element={<Landing />} />

          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="dashboard/Recent_Activity"
              element={<RecentActivity />}
            />
            <Route path="dashboard/Profile" element={<Profile />} />
            <Route
              path="dashboard/Material_schedule/blocks"
              element={<Blocks />}
            />
            <Route
              path="dashboard/Material_schedule/concrete_works"
              element={<ConcreteWorks />}
            />
            <Route
              path="dashboard/Material_schedule/fillings"
              element={<Fillings />}
            />
            <Route
              path="dashoard/Bill_Of_Quantities"
              element={<BillOfQuantities />}
            />
            <Route path="dashboard/Marketplace" element={<MarketPlace />} />
            <Route
              path="dashboard/Material_schedule/Tiles"
              element={<Tiles />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
