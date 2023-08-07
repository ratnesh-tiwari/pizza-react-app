import LinkButtom from "../../ui/LinkButtom";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButtom to="/menu">&larr; Back to menu</LinkButtom>

      <p className="mt-7 font-semibold">
        {" "}
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
