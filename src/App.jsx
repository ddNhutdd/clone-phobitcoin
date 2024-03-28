import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalStyle } from "./components/global";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/config-store";
import { AlertContextContainer } from "./contexts/alert-context";

function App() {

  return (
    <ReduxProvider store={store}>
      <AlertContextContainer>
        <GlobalStyle>
          <RouterProvider router={router} />
        </GlobalStyle>
      </AlertContextContainer>
    </ReduxProvider>
  )
}

export default App
