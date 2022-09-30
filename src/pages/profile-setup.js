import React, { useContext } from "react";
import { userContext } from "../context";
import * as api from "../api";

export default () => {
  const user = useContext(userContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-xs">
        <form
          onSubmit={async e => {
            e.preventDefault();
            const { firstName, lastName } = e.target;
            const profile = await api.setProfile(
              firstName.value,
              lastName.value
            );
            user.setData(profile);
          }}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-gray-800 text-lg font-medium mb-6 pb-4 border-b border-gray-300">
            Set profile
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              type="text"
              required
              placeholder="John"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
