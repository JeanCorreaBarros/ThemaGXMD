import React from "react";
import { AiFillFileExclamation } from "react-icons/ai";
import Parametros from "../components/Reportes/Parametros";
import Tabla from "../components/Reportes/Tabla";
import PDF from "../components/Reportes/PDF";

const reportes = () => {
  const title = ([
    {
      name: "Reportes"
    }
  ])
  return (
    <div className="w-full grid place-items-start mt-[70px] ml-[15px]">
      <div className="w-full ">
        <div
          className="flex w-full pl-[20px] items-center h-[40px] border"
          style={{
            background: "rgba(132, 223, 71, 0.363)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            borderColor: "rgba(132, 223, 71, 0.363)",
          }}
        >
          <AiFillFileExclamation className="text-lime-700 text-[28px]" />
         {title.map((titulo) => {
          return <h1 className="text-lime-800">{titulo.name}</h1>
         })} 
        </div>
        <div className="flex w-[98%] pt-[10px]">
          <Parametros />
          <PDF />
        </div>
      </div>
    </div>
  );
};

export default reportes;
