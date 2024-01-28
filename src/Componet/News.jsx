import React from "react";

const News = () => {
  return (
    <div className="py-10 bg-slate-200">
      <h3 className="text-center py-1">
        <span className="border-b-2 pb-1 border-yellow-700 text-gray-600">
          DON'T MISS
        </span>
      </h3>
      <h1 className="font-serif text-3xl font-thin py-4 text-center">
        Our News And Events
      </h1>
      <p className="text-center">
        We had dinner in the hotel's restaurant. The restaurant serves
        breakfast, lunch, and dinner.
      </p>

      <div className=" py-10 flex gap-x-10 w-10/12 mx-auto">
        <div className="bg-slate-100">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Our News"
          />

          <div className="p-3">
            <h4 className="font-serif pt-2 ">Nunc Volutpat Venenatis</h4>
            <p className="text-yellow-600 py-1 text-sm">CATEGORY</p>
            <p className="text-gray-700">
              The food at the restaurant was good and the waiters were polite.
              The seafood restaurant specializes in serving fish and shellfish.
              We had dinner in the hotel's restaurant. The restaurant serves
              breakfast, lunch, and dinner.
            </p>
          </div>
        </div>
        <div className="bg-slate-100">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Our News"
          />
          <div className="p-3">
            <h4 className="font-serif pt-2 ">Nunc Volutpat Venenatis</h4>
            <p className="text-yellow-600 py-1 text-sm">CATEGORY</p>
            <p className="text-gray-700">
              The food at the restaurant was good and the waiters were polite.
              The seafood restaurant specializes in serving fish and shellfish.
              We had dinner in the hotel's restaurant. The restaurant serves
              breakfast, lunch, and dinner.
            </p>
          </div>
        </div>
        <div className="bg-slate-100">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Our News"
          />
          <div className="p-3">
            <h4 className="font-serif pt-2 ">Nunc Volutpat Venenatis</h4>
            <p className="text-yellow-600 py-1 text-sm">CATEGORY</p>
            <p className="text-gray-700">
              The food at the restaurant was good and the waiters were polite.
              The seafood restaurant specializes in serving fish and shellfish.
              We had dinner in the hotel's restaurant. The restaurant serves
              breakfast, lunch, and dinner.
            </p>
          </div>
        </div>
      </div>

      <button className="mx-auto block text-center bg-yellow-700 py-2 px-5 text-white font-mono hover:bg-yellow-600 transition-all duration-300">
        LOAD MORE
      </button>
    </div>
  );
};

export default News;
