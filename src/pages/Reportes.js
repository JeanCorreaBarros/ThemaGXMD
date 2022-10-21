import React from 'react';
import Parametros from '../components/Reportes/Parametros';
import Tabla from '../components/Reportes/Tabla';
import PDF from '../components/Reportes/PDF';

const reportes = () => {
  return (
    <div className="w-full grid place-items-start mt-[75px] ml-[20px]">
      <div className="flex w-[98%]">
      <Parametros />
      <PDF />
      </div>
    </div>
  );
};

export default reportes;
