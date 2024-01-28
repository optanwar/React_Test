import React from "react";

const Our_store = () => {
  return (
    <div className="flex gap-x-24 p-20">
      <div className="w-1/2">
        <h3 className="">
          <span className="border-b-2 border-yellow-600 pb-1 text-b">
            OUR STORY
          </span>
        </h3>
        <h1 className="py-5 font-mono text-3xl font-semibold">
          Welcome to Royal
        </h1>
        <p className="text-gray-600">
          We had dinner in the hotel's restaurant. The restaurant serves
          breakfast, lunch, and dinner. The food at the restaurant was good and
          the waiters were polite. The seafood restaurant specializes in
          serving. We had dinner in the hotel's restaurant. The restaurant
          serves breakfast, lunch, and dinner. The food at the restaurant was
          good and the waiters were polite. The seafood restaurant specializes
          in serving fish and shellfish. We had dinner in the hotel's
          restaurant. The restaurant serves breakfast, lunch, and dinner. The
          food at the restaurant was good and the waiters were polite. The
          seafood restaurant specializes in serving fish and shellfish. The food
          at the restaurant was good and the waiters were polite. The seafood
          restaurant specializes in serving fish and shellfish. We had dinner in
          the hotel's restaurant. The restaurant serves breakfast, lunch, and
          dinner. The food at the restaurant was good and the waiters were
          polite. The seafood restaurant specializes in serving fish and
          shellfish.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about restaurant"
          height={200}
          width={320}
        />
      </div>
    </div>
  );
};

export default Our_store;
