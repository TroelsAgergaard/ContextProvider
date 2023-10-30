import { useContext } from "react";
import myContext from "../context/myContext";

const Value = () => {
  const [context, setContext] = useContext(myContext)
  return ( <div onClick={() => setContext(!context)}>{context ? "true" : "false"}</div> );
}
 
export default Value;