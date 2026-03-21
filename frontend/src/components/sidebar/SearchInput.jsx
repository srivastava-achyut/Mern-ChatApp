import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";
const SearchInput = () => {

  const [search, setSearch] = useState("");

  const {setSelectedConversations} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    if(!search) return;
    if(search.length < 3){
     return toast.error('Search query must be at least 3 characters long');

    }
    const conversation = conversations.find((conv)=> conv.fullname.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversations(conversation);
      setSearch("");
    }else{
      toast.error('No conversation found');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2">

      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full bg-black-800 text-white placeholder-gray-400 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
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