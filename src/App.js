import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";

function App() {
  const isLoggedIn = false;

  return (
    <>
      <BrowserRouter>
        <TopBar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />

          <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
          <Route
            path="/settings"
            element={isLoggedIn ? <Settings /> : <Register />}
          />
          <Route
            path="/write"
            element={isLoggedIn ? <Write /> : <Register />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Home /> : <Register />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
