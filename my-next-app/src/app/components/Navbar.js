export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">
          🐟 Fineon Family
        </h1>

        <div className="space-x-6 font-medium">
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}