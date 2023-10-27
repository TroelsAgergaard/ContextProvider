import { useOutletContext } from "react-router-dom";
const Frontpage = () => {
  const context = useOutletContext();
  return ( <>Frontpage! {context}</> );
}
 
export default Frontpage;