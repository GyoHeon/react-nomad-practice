import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 flex flex-col gap-5">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Great Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-2 text-center rounded-xl w-1/2 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="relative p-6 rounded-3xl bg-white -top-5">
          <div className="flex justify-between items-end -top-16 relative">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$230</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 -mb-5">
            <span className="text-xl font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
