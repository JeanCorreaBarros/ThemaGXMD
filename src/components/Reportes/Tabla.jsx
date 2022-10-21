import React from "react";

const tabla = () => {
  return (
    <div
      className="w-full min-h-[520px] ml-[20px] border border-gray-300"
      style={{ background: "#DFF0D8", overflow: "auto" }}
    >
      <h1 className="text-[20px] text-lime-600 font-semibold ml-[15px] mt-[10px] mb-[18px]">
        Lista de facturas en un periodo
      </h1>
      <div className="w-[100px]">
        <div className="flex w-full items-center ml-[15px] mb-[20px]">
          <label className="text-lime-700">Mostrar</label>
          <select
            name="select"
            className="min-w-[65px] h-[35px] mr-[10px] text-center border rounded border-gray-300 focus:outline-none focus:border-lime-600 "
          >
            <option value="value1">1</option>
            <option value="value2">2</option>
            <option value="value3">3</option>
            <option value="value3" selected>
              15
            </option>
          </select>
          <label className="text-lime-700 mr-[30px]">Registros</label>
          <button className="mr-[20px]">CSV</button>
          <button className="mr-[20px]">Excel</button>
          <button className="mr-[20px]">PDF</button>
          <button className="mr-[20px]">Print</button>
          <button className="mr-[20px]">Copy</button>
          <label className="text-lime-700">Buscar:</label>
          <input
            type="text"
            className="min-w-[140px] h-[33px] pl-[8px]  border rounded-[4px] border-gray-300 focus:outline-none focus:border-lime-600"
          />
        </div>
          <table className="w-full h-full text-white text-[13px]">
            <thead>
              <tr>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Fecha
                </th>
                <th className="w-[183px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white">
                  Fecha Factura
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Periodo
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Ingreso
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  ID Paciente
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Paciente
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Descripcion
                </th>
                <th
                  className="w-[133px] min-w-[133px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Entidad
                </th>
                <th
                  className="w-[133px] min-w-[100px] h-[44px] bg-lime-700 font-medium border-[2px] border-r-white"
                  rowSpan={1}
                  colSpan={1}
                >
                  Contrato
                </th>
              </tr>
            </thead>
          </table>
      </div>
    </div>
  );
};

export default tabla;
