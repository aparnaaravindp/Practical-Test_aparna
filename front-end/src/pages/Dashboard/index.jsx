import { useEffect, useState } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { StyledMainDiv } from "./style";
import { api } from "../../services/api";

export function Dashboard() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/empresas/");
      setEmpresas(response.data);
    })();
  }, []);

  return (
    <StyledMainDiv>
      <div className="mainContainer">
        <DashboardHeader />
        <div className="empresaList">
          <ul>
            {empresas.map((empresa) => {
              <li>
                key = {empresa.id}
                <h2>{empresa.name}</h2>
                <p>{empresa.cpf}</p>
                <p>{empresa.fancy_name}</p>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </StyledMainDiv>
  );
}
