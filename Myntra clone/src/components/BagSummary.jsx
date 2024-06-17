import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((store) => store.BagItemList);
  const items = useSelector((store) => store.item);
  let total_Item = bagItemIds.length;
  const Convenience_Fee = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  const filteredItems = items.filter((item) => bagItemIds.includes(item.id)); // filter all elemnet
  filteredItems.forEach((item) => {
    totalMRP += item.current_price;
    totalDiscount += item.original_price - item.current_price;
  });
  console.log(totalDiscount);
  let finalPayment = totalMRP - totalDiscount + Convenience_Fee;

  return (
    //current_price
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {total_Item} Items </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};
export default BagSummary;
