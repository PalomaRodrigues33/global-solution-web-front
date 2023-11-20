import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import { Outlet } from "react-router-dom";
import "./App.module.css";

export default function App() {

  return (
    <>
      <Cabecalho />

      <Outlet />

      <Rodape />
    </>
  );
}
