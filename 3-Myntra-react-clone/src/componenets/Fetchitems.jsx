import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const Fetchitems = () => {

   const fetchStatus = useSelector((store) => store.fetchStatus);
   const dispatch = useDispatch();

   useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(( {items }) => {
       
       dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsAction.addInitialitems(items[0]));
      }
    )

return () => {
    controller.abort();
  };
}, [fetchStatus]);

return(
    <>   
    </>
    )
}

export default Fetchitems;