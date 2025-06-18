import "./App.css";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from "./Components/Footer";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import ScrollToTop from "./Components/ScrollToTop";
// import HomeIndex from "./Pages/Home/HomeIndex";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomeIndex />}></Route>
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="termsconditions" element={<TermsConditions />} />
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

      <Footer />
    </div>
  );
};
