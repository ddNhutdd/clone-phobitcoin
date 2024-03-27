import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalStyle } from "./components/global";

function App() {

  return (
    <GlobalStyle>
      <RouterProvider router={router} />
    </GlobalStyle>
  )
}

export default App
