import { useSelector } from "react-redux";
import Bagitems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
export function Bag() {
  const items = useSelector((store) => store.item);
  const bagItemIds = useSelector((store) => store.BagItemList);

  console.log("Items:", items);
  console.log("Bag Item IDs:", bagItemIds);

  const filteredItems = items.filter((item) => bagItemIds.includes(item.id));
  console.log("filteredItems " + filteredItems);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <Bagitems itemdata={filteredItems} />
          </div>
          <div className="bag-summary">
            <BagSummary item={filteredItems} />
          </div>
        </div>
      </main>
    </>
  );
}
