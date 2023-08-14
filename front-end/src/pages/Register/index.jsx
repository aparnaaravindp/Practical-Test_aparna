import { RegisterHeader } from "../../components/RegisterHeader";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledDiv } from "./style";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  cpf: yup.number().required("Number is required"),
});
export function RegisterPage() {
  const [empresaData, setEmpresaData] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const empresaCreate = async (data) => {
    try {
      const response = await api.post("/empresas/", data);
      setEmpresaData(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDiv>
      <RegisterHeader />
      <div className="registerForm">
        <h1>Create Empresas</h1>
        <form onSubmit={handleSubmit(empresaCreate)}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Digit the name"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="">CPF</label>
            <input
              type="number"
              placeholder="Digit the cpf"
              {...register("cpf")}
            />
          </div>
          <div>
            <label htmlFor="">FancyName</label>
            <input
              type="text"
              placeholder="Digit the fancy_name"
              {...register("fancy_name")}
            />
          </div>
          <div>
            <label htmlFor="">Logotype</label>
            <input
              type="text"
              placeholder="Digit the logotype"
              {...register("logotype")}
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Digit the address"
              {...register("address")}
            />
          </div>
          <button className="registerButton" type="submit">
            {" "}
            Register
          </button>
        </form>
      </div>
    </StyledDiv>
  );
}
