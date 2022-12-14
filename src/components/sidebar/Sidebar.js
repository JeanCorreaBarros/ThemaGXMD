import React, {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiLineChartDown } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import favicon from "../../assets/img/favicon.ico";
import img from "../../assets/img/empresa.jpg";
import SidebarMenu from "./SidebarMenu";
import { routes } from "./Data";

const SideBar = (props) => {

  const [data, setData] = useState("");
  const  url  =  "http://api.genomax.co/NXSAPI/v1.0/auth/Menu/";
    let raw = {    
      "perfil": 0,
      "aplicacion" : 3
    };

    let options =   {
      method: "POST",
      body: JSON.stringify(raw)
    }
  const peticiones = async ()=>{
    await fetch(url,options)
    .then(response => response.json())
    .then(json =>{
      setData(json)
      console.log(json)
    }) 
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticiones();
  },[])



  const Toggle = () => {
    props.cambio(!props.estado);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        animate={{
          width: props.estado ? "300px" : "66px",
          minWidth: props.estado ? "238px" : "66px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          <AnimatePresence>
            <motion.div
              animate={{
                marginLeft: props.estado ? "" : "-0.5px",
              }}
            >
              <img src={favicon} alt="" className="img_section w-11 h-11" />
            </motion.div>
            {props.estado && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                GenomaX
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <motion.div
              animate={{
                rotate: props.estado ? 0 : -180,
                position: "relative",
                top: props.estado ? "" : "7px",
                left: props.estado ? "" : "4px",
                transition: {
                  duration: 0.1,
                },
              }}
            >
              <RiArrowLeftSLine className="icon_sidebar" onClick={Toggle} />
            </motion.div>
          </div>
        </div>
        <div className="search">
          <motion.div
            animate={{
              width: props.estado ? "56px" : "",
              marginRight: props.estado ? "16px" : "-20px",
            }}
          >
            <img alt="" src={img} className="img_empresa h-14 rounded-xl" />
          </motion.div>
        </div>
        <div className="separador_section"></div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={props.cambio}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={props.estado}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">
                  <motion.div
                    animate={{
                      marginLeft: props.estado ? "" : "10px",
                      fontSize: props.estado ? "" : "17px",
                    }}
                  >
                    {route.icon}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {props.estado && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
        <div className="separador_section-two"></div>
        <motion.div
              animate={{
                marginLeft: props.estado ? "6px" : "0px",
                width: props.estado ? "95%" : "100%",
              }}
            >
        <div className="soporte">
          <ul className="items_soporte" activeClassName="active">
            <motion.div
              animate={{
                fontSize: props.estado ? "" : "17px",
                marginLeft: props.estado ? "10px" : "20px",
              }}
            >
              <BiLineChartDown className="icon_soporte" />
            </motion.div>
            <motion.div
              animate={{
                display: props.estado ? "" : "none",
              }}
            >
              <li>Reportes</li>
            </motion.div>
          </ul>
          <ul className="items_soporte">
            <motion.div
              animate={{
                fontSize: props.estado ? "" : "17px",
                marginLeft: props.estado ? "10px" : "20px",
              }}
            >
              <IoSettingsOutline className="icon_soporte" />
            </motion.div>
            <motion.div
              animate={{
                display: props.estado ? "" : "none",
              }}
            >
              <li>Configuraci??n</li>
            </motion.div>
          </ul>
        </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SideBar;