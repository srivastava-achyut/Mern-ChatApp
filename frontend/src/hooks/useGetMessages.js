import { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast'; // Ensure toast is imported

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                // Use optional chaining to prevent errors if ID is missing
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                
                if (data.error) throw new Error(data.error);
                
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        // This must be inside the useEffect but AFTER the function definition
        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]); // Re-run when the selected user changes

    return { loading, messages };
};

export default useGetMessages;