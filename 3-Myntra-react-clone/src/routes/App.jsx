import { Outlet } from "react-router-dom"
import Footer from "../componenets/Footer"
import Header from "../componenets/Header"
import Fetchitems from "../componenets/Fetchitems"
import LoadingSpinner from "../componenets/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
 
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (   
    <>
   
  <Header/>
    <Fetchitems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
    
    <Footer/>
    </>
  )
}

export default App;
