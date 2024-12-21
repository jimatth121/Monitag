import "./App.css";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import HomeIndex from "./Pages/Home/HomeIndex";
// import HomeIndex from "./Pages/Home/HomeIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomeIndex />}></Route>
            {/* <Route path="privacypolicy" element={<Privacy />} /> */}
            {/* <Route path="termsconditions" element={<TermsConditions />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Layout = () => {
  return (
    <div id="app" className=" overflow-x-hidden ">
      <Header />
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
};
