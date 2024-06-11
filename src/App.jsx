import AppRoutes from "./AppRoutes";
import Header from "./components/Header/header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
