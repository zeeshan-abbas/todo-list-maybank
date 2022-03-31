import AppRoute from "./Route";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <>
      <ToastContainer/>
      <AppRoute/>
    </>
  );
}

export default App;
