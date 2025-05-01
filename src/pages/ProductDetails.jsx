import { useParams } from "react-router-dom";
import plants from "../data/plants";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const plant = plants.find(p => p.id === parseInt(id));

  if (!plant) {
    return <div className="text-center py-10 text-red-500">Product not found</div>;
  }

  const usdToInr = 83;
  const priceInInr = plant.price * usdToInr;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-green-800">{plant.name}</h1>
        <p className="mt-4 text-gray-600">{plant.description}</p>
        <p className="mt-2 text-2xl font-bold text-green-700">₹{priceInInr.toLocaleString("en-IN")}</p>
        <p className="text-sm text-gray-500">~ ${plant.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(plant)}
          className="mt-6 bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;