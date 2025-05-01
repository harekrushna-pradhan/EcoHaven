const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} HomePlant. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;