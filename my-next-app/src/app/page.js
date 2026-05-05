import FishCard from "./components/FishCard";

export default function Home() {
  const fishes = [
    { name: "Rui Fish", price: "৳250/kg", tag: "Fresh" },
    { name: "Katla Fish", price: "৳300/kg", tag: "Popular" },
    { name: "Hilsha Fish", price: "৳1200/kg", tag: "Premium" },
    { name: "Pangas Fish", price: "৳180/kg", tag: "Budget" },
    { name: "Tilapia Fish", price: "৳200/kg", tag: "Fresh" },
    { name: "Shrimp", price: "৳650/kg", tag: "Best Seller" },
    { name: "Koi Fish", price: "৳550/kg", tag: "Fresh" },
    { name: "Magur Fish", price: "৳500/kg", tag: "Hot" },
    { name: "Shing Fish", price: "৳600/kg", tag: "Premium" },
    { name: "Rupchanda", price: "৳650/kg", tag: "Sea Fresh" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-blue-600">
            🐟 Fineon Family
          </h1>

          <nav className="space-x-6 text-gray-600 font-medium">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 to-green-500 text-white py-24 text-center px-4"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Fresh Fish Delivered<br />From River to Your Home 🐟
        </h1>

        <p className="mt-4 text-lg text-white/90">
          Premium quality fish at the best price in Bangladesh
        </p>

        <div className="mt-6 space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Shop Now
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-semibold">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-600">
        <div className="bg-white p-6 rounded-xl shadow">
          🚚 <h3 className="font-bold mt-2">Fast Delivery</h3>
          <p className="text-gray-500 text-sm mt-1">Within 24 hours</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          🐟 <h3 className="font-bold mt-2">Fresh Quality</h3>
          <p className="text-gray-500 text-sm mt-1">Direct from river</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          💰 <h3 className="font-bold mt-2">Best Price</h3>
          <p className="text-gray-500 text-sm mt-1">Affordable rate</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-600">
          🐟 Our Premium Fish Collection
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Choose fresh & healthy fish for your family
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fishes.map((fish, i) => (
            <FishCard key={i} {...fish} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-500">About Finneon Family</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          We are committed to providing the freshest fish sourced directly from rivers and farms.
          Our mission is to deliver quality, trust, and freshness to every home in Bangladesh.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-600">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          📞 +8801XXXXXXXXX | 📧 fineonfish@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 Fineon Family Fish Shop | Built with Next.js
      </footer>

    </div>
  );
}