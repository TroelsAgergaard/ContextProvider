import { useContext } from "react";
import myContext from "../context/myContext";

const Value = () => {
  const context = useContext(myContext)
  return ( <>{context}</> );
}
 
export default Value;