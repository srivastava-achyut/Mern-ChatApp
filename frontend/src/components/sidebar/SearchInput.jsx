import { FaSearch } from "react-icons/fa";

const SearchInput = () => {

  return (
    <form className="flex items-center gap-2 p-2">

      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full bg-black-800 text-white placeholder-gray-400 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <button
        type="submit"
        className="btn btn-circle bg-sky-500 hover:bg-sky-600 text-white border-none"
      >
        <FaSearch />
      </button>

    </form>
  );
};

export default SearchInput;