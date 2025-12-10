import React from 'react';
import Sidebar from '../../components/sidebar/Siderbar';
import MessageContainer from '../../components/message/MessageContainer';

const Home = () => {
  return (
    <div
  className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden 
  bg-blue-100/10 backdrop-blur-md border border-black shadow-md">
  <Sidebar />
  <MessageContainer/>
</div>

  );
}

export default Home;
