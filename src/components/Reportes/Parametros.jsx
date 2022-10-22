import { BiSearch } from "react-icons/bi";

const parametros = (Cambiar) => {
  return (
    <div
      className="w-[200px] min-w-[200px] h-[60%] border border-gray-300 bg-white"
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
          onClick={Cambiar}
          className="w-full h-[33px] mb-[25px] border rounded-[4px]"
          style={{ background: "#66a31c", borderColor: "#66a31c" }}
        ></button>
      </div>
    </div>
  );
};

export default parametros;
