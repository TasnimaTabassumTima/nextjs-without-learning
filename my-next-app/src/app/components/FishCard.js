export default function FishCard({ name, price, tag }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition duration-300 border">

      {/* TAG */}
      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        {tag}
      </span>

      {/* NAME */}
      <h2 className="text-lg font-bold mt-3 text-gray-600">{name}</h2>

      {/* PRICE */}
      <p className="text-gray-500 mt-1">{price}</p>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 rounded-xl hover:opacity-90 transition">
        Add to Cart 🛒
      </button>
    </div>
  );
}