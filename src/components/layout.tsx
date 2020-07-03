import React from "react";
import layoutStyles from "./layout.module.scss";

export default function Layout({children})  {
  return <div className={layoutStyles.layout}> <p> {children} </p></div>
}