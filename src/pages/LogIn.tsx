import React from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const LogIn: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/50">
      <div className="bg-gradient-to-b from-slate-300/50 via-slate-200/50 to-slate-100/50 h-4/5 lg:h-3/6 w-3/5 lg:w-1/4 rounded-3xl flex flex-col justify-center items-center">
        <div className="w-full flex justify-center">
          <h1 className="text-xl lg:text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
            Votre code
          </h1>
        </div>

        <div className="w-full h-5/6 rounded-3xl flex flex-col justify-around items-center justify-items-center">
          <div className="w-4/5 h-64 rounded-xl bg-gray-900 flex flex-col justify-around items-center text-white">
            <div className="w-full flex justify-end">
              <img src="src/assets/cc.png" alt="" className="w-28 mt-6 mr-10" />
            </div>
            <div className="w-full flex justify-start">
              <img src="src/assets/chip.png" alt="" className="w-16 ml-10" />
            </div>
            <input
              type="text"
              value={'0765 3212 8456 9087'}
              // placeholder='0765 3212 8456 9087'
              disabled
              className="w-4/5 bg-transparent text-2xl text-center"
            />
            <div className="w-full flex justify-between px-10 mb-6">
              <span className='uppercase'>card holder</span>
              <span> 05/24 </span>
            </div>
          </div>

          <div className="flex flex-col w-full items-center">
            <input
              type="text"
              placeholder="code"
              className=" w-5/6 rounded-lg p-4"
            />
            <Link to='/home' className="bg-slate-100 rounded-lg px-4 py-1 text-xl my-2 w-1/4 text-center">
              submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
