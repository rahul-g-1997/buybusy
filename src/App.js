// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// custom context provider (authentication and product)
import { AuthContext } from "./authContext";
import { ProductContext } from "./productContext";

// all the pages and component to render
import Navbar from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { MyOrder } from "./Pages/MyOrder";
import { Cart } from "./Pages/Cart";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Error } from "./Pages/Error";
import upArrowIcon from "./Assets/arrow-up.png";

// main app function
function App() {
  // all the link routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/myorder", element: <MyOrder /> },
        { path: "/cart", element: <Cart /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <>
      {/* custom authContext provider */}
      <AuthContext>
        {/* custom product context provider */}
        <ProductContext>
          {/* routes */}
          <RouterProvider router={router} />
        </ProductContext>
      </AuthContext>
      {/* 👇️ scroll to top on button click */}
      <div>
        <div style={{ height: "49rem" }} />
        <img
          src={upArrowIcon}
          alt="Scroll to top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            color: "#fff",
            cursor: "pointer",
            textAlign: "center",
            transition: "transform 0.2s ease",
          }}
          className="hover-scale"
          onMouseEnter={() => {
            document.querySelector(".hover-scale").style.transform =
              "scale(1.5)";
          }}
          onMouseLeave={() => {
            document.querySelector(".hover-scale").style.transform = "scale(1)";
          }}
        />
      </div>
    </>
  );
}

export default App;
