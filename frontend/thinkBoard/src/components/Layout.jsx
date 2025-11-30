import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

function Layout() {
  return (
    <div className="relative min-h-screen">

      {/* NAVBAR ALWAYS ON TOP */}
      <Header />

      {/* BACKGROUND (behind everything) */}
      <div className="absolute inset-0 -z-10 
          bg-black 
          [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]">
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-10 px-5"> 
        {/* padding-top prevents navbar overlap */}
        <Outlet />
      </div>

      <Toaster />
    </div>
  );
}

export default Layout;
