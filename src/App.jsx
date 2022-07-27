import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./userContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import AccountUser from "./Components/Account/AccountUser/AccountUser";
import Photo from "./Components/Photo/Photo/Photo";
import UserProfile from "./Components/Account/AccountUser/UserProfile/UserProfile";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="account/*"
                element={
                  <ProtectedRoute>
                    <AccountUser />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
