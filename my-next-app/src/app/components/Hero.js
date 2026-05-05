export default function Hero() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-green-100 text-center">
      <h1 className="text-5xl font-bold text-blue-400">
        Fresh Fish, Direct from River 🐟
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Fineon Family Fish Shop - Quality you can trust
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full">
        Shop Now
      </button>
    </div>
  );
}