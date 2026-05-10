const Navbar = () => {
  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-red-500">
        YouTube UI
      </h1>

      <input
        type="text"
        placeholder="Search"
        className="bg-gray-800 px-4 py-2 rounded-lg outline-none w-72"
      />
    </div>
  );
};

export default Navbar;