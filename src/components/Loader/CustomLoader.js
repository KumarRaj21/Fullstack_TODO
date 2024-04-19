import React from "react"; 
import { Loader, Placeholder } from "rsuite";
import "./CustomLoader.css";

const CustomLoader = () => (
  <div className="CustomLoader">
    <Placeholder.Paragraph rows={8} />
    <Loader center content="Loading" /> 
    {/* <h2>H</h2> */}
  </div>
);

export default CustomLoader; 
