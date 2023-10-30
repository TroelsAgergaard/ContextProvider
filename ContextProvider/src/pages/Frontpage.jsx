import { useContext } from "react";
import myContext from "../context/myContext";
const Frontpage = () => {
  const [context, setContext] = useContext(myContext)
  return ( <>Frontpage! {context ? "true" : "false"}</> );
}
 
export default Frontpage;