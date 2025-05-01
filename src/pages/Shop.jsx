import PlantCard from "../components/PlantCard";
import plants from "../data/plants";

const Shop = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Browse Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default Shop;