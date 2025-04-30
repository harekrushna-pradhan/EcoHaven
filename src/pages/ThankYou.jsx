import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
      <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
      <Link
        to="/"
        className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
