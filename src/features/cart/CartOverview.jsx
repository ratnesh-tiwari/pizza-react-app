import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const tolalCartQuantity = useSelector(getTotalQuantity);
  const tolalCartPrice = useSelector(getTotalCartPrice);

  if (!tolalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base ">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{tolalCartQuantity} pizzas</span>
        <span>{formatCurrency(tolalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
