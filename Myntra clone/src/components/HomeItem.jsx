import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BagItemActions } from "../store/BagItem";
export const HomeItem = ({ item }) => {
  let [itemselected, Activeitemselected] = useState(false);
  const dispatch = useDispatch();
  const addItem = () => {
    Activeitemselected(true);
    console.log(itemselected);
    dispatch(BagItemActions.AddBagItem({ id: item.id }));
  };

  const handleDeleteItem = (item) => {
    console.log(itemselected);

    Activeitemselected(false);
    dispatch(BagItemActions.DeleteBagItem({ id: item.id }));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {!itemselected ? (
          <button className="btn-add-bag addbtn" onClick={addItem}>
            Add to Bag
          </button>
        ) : (
          <button
            className="btn-add-bag deletebtn"
            onClick={() => handleDeleteItem(item)}
          >
            Delete bag
          </button>
        )}
      </div>
    </>
  );
};
