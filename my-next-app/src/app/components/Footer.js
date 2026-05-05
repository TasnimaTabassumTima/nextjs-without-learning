export default function FishCard({ name, price }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}