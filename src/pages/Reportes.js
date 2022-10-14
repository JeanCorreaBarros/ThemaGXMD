import { BiSearch } from "react-icons/bi";

const reportes = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="flex w-full">
        {/***Contenedor principal***/}
        <div
          className="w-[220px] min-w-[220px] h-[100%] ml-[40px] border border-gray-300 bg-white"
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            boxShadow: "0px 4px 4px 1px rgba(0,0,0,0.27)",
          }}
        >
          {/***Cabecera***/}
          <div
            className="w-full h-[35px]"
            style={{
              background: "rgba(132, 223, 71, 0.363)",
              boxShadow: "0.3px 4px 4px 1px rgba(0,0,0,0.27)",
            }}
          ></div>
          <div className="mt-[30px] pr-[10px] pl-[10px]">
            {/***group buscador***/}
            <div className="flex mb-[20px] ">
              <input
                type="text"
                className="w-full h-[33px] pl-[8px] border rounded-[4px] border-gray-300 focus:outline-none focus:border-lime-600"
              />
              <button
                className="w-[40px] h-[28px] mt-[2px]"
                style={{
                  background: "#66a31c",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <BiSearch className="text-white w-full" />
              </button>
            </div>
            {/***group buscador***/}
            <div className="flex mb-[20px] ">
              <input
                type="text"
                className="w-full h-[33px] pl-[8px] border rounded-[4px] border-gray-300 focus:outline-none focus:border-lime-600"
              />
              <button
                className="w-[40px] h-[28px] mt-[2px]"
                style={{
                  background: "#66a31c",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <BiSearch className="text-white w-full" />
              </button>
            </div>
            {/***Inputs fecha***/}
            <input
              type="date"
              className="w-full h-[33px] mb-[20px] pl-[8px] border rounded-[4px] border-gray-300 focus:outline-none"
            />
            <input
              type="date"
              className="w-full h-[33px] mb-[20px] pl-[8px] border rounded-[4px] border-gray-300 focus:outline-none"
            />

            {/***boton vista previa***/}
            <button
              className="w-full h-[33px] mb-[25px] border rounded-[4px]"
              style={{ background: "#66a31c", borderColor: "#66a31c" }}
            ></button>
          </div>

          {/***Boton Exportar***/}
          <div
            className="w-full h-[35px] relative top-[50px]"
            style={{
              background: "rgba(132, 223, 71, 0.363)",
              boxShadow: "0.3px 4px 4px 1px rgba(0,0,0,0.27)",
            }}
          ></div>
        </div>

        {/***Tabla***/}
        <div className="w-[70%] h-[424px] ml-[20px] border border-lime-600"></div>
      </div>
    </div>
  );
};

export default reportes;
