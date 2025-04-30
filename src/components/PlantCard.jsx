import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={plant.image}
        alt={plant.name}
        className="h-52 w-full object-cover rounded-xl mb-4"
      />
      <h2 className="text-lg font-semibold text-green-800">{plant.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{plant.description}</p>
      <p className="text-green-600 font-bold mb-4">${plant.price}</p>
      <div className="mt-auto flex gap-2">
        <Link
          to={`/product/${plant.id}`}
          className="flex-1 text-center py-2 text-sm font-medium bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition"
        >
          View
        </Link>
        <button
          onClick={() => addToCart(plant)}
          className="flex-1 py-2 text-sm font-medium bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
