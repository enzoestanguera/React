import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/index";
import Conteudo from "./components/Conteudo/index";
import Rodape from "./components/Rodape/index";

export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}