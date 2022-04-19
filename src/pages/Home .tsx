import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/50">
      <div className="bg-gradient-to-b from-cyan-700 via-cyan-600 to-cyan-500 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
        <div className="h-24 w-full flex justify-between items-center pr-16">
          <div className="text-white font-bold">
            <img src="src/assets/t.svg" alt="" className="w-72 mb-8" />
          </div>
          <div className="bg-black/20 w-1/5 rounded-full flex">
            <p className="p-2 w-1/2 text-center">FR</p>
            <p className="bg-white p-2 w-1/2 rounded-full text-center">EN</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <h1 className="pl-12 text-white font-semibold text-4xl my-6">
            Select a Service
          </h1>
          <div className="w-full h-full flex">
            <div className="h-full pl-12 w-full grid grid-cols-3 lg:grid-cols-3 gap-2">
              <a
                href="/product/build-your-own-drone"
                className="relative border border-gray-100 bg-white rounded-tl-3xl w-full h-full flex flex-col justify-center items-center"
              >
                <img src="src/assets/euro.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-sm lg:text-2xl">
                  cash withdrawal
                </h2>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-full"
              >
                <img src="src/assets/smartphone.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-base lg:text-2xl">
                  pay bills
                </h2>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-tr-3xl w-full h-full"
              >
                <img src="src/assets/box.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-sm lg:text-2xl">
                  check your cash
                </h2>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-bl-3xl w-full h-4/5"
              >
                <img src="src/assets/car.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-sm lg:text-2xl">
                  Car vignette
                </h2>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-4/5"
              >
                <img src="src/assets/airplane.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-sm lg:text-2xl">
                  Travel ticket
                </h2>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-br-3xl w-full h-4/5"
              >
                <img src="src/assets/mobile.gif" alt="" className="w-1/4" />
                <h2 className="font-semibold text-sm lg:text-2xl">
                  Mobile recharge
                </h2>
              </a>
            </div>
            <div className="w-2/5 h-full flex justify-center pb-16">
              <div className="bg-[url(https://images.pexels.com/photos/7948726/pexels-photo-7948726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)] bg-cover w-4/5 h-full rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
