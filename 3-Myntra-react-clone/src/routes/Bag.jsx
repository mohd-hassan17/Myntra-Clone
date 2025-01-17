import BagItem from "../componenets/BagItem";
import BagSummary from "../componenets/BagSummary";
import {useSelector} from "react-redux";


const Bag = () => {

  const items = useSelector((state) => state.items);
  const bagItems = useSelector((state) => state.bag);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;

  })
  
    return(
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {
            finalItems.map((item) => <BagItem item={item}/>)
          }
          
        </div>
       <BagSummary/>

      </div>
    </main>
   

    )

}


export default Bag;