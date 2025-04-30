import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input type="text" placeholder="Full Name" required className="w-full border px-4 py-2 rounded-md" />
        <input type="email" placeholder="Email Address" required className="w-full border px-4 py-2 rounded-md" />
        <input type="text" placeholder="Shipping Address" required className="w-full border px-4 py-2 rounded-md" />
        <button type="submit" className="bg-green-700 text-white w-full py-3 rounded-lg hover:bg-green-800">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
