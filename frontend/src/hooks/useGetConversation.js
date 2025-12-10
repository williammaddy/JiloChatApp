import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Conversations from '../components/sidebar/Conversations';

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversation(data);
      } catch (error) {
        console.log(error.message)
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
