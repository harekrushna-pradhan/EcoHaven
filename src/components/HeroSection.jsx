import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-green-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            Bring Nature <br />
            <span className="text-green-600">Into Your Home</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            Explore beautiful and healthy indoor plants delivered right to your doorstep.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          src="https://i.pinimg.com/736x/64/12/b2/6412b268eebbbd118a65e9fee0ddecf7.jpg"
          alt="Hero Plant"
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;