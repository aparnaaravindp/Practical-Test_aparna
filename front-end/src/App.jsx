import { RegisterPage } from "./pages/Register";
import { AppRoutes } from "./routes";
import { GlobalReset } from "./styles/reset";

function App() {
  return (
    <>
      <GlobalReset />
      <AppRoutes/>
      <RegisterPage />
    </>
  );
}

export default App;
