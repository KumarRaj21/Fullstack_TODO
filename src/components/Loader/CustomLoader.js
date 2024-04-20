import React from "react"; 
import { Loader, Placeholder } from "rsuite";
import "./CustomLoader.css";

const CustomLoader = () => (
  <div className="CustomLoader">
    <Placeholder.Paragraph rows={8} />
    <Loader center content="Loading" /> 
  </div>
);

export default CustomLoader; 
