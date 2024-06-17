import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchActions } from "../store/FetchingSlice";
import { itemActions } from "../store/ItemSlice";

export const FetchData = () => {
  const FetchStatus = useSelector((store) => store.FetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (FetchStatus.fetchdone) return;
    dispatch(FetchActions.markFetchStarted());

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchActions.markFetchDone());

        dispatch(FetchActions.markFetchFinished());

        dispatch(itemActions.AddIntialstate(items[0]));
      });
  }, [FetchStatus]);
};
