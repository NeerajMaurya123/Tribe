import React, { useContext } from "react";
import { userContext } from "../context";

export default () => {
  const { data, removeSession } = useContext(userContext);

  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <div className="h-12 px-4 bg-white flex items-center shadow flex-shrink-0">
        {data.firstName} {data.lastName}
        {/* <button
          onClick={removeSession}
          className="ml-auto pointer underline text-blue-500"
        >
          Sign out
        </button> */}
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          className="w-56"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/selection_92i4.svg"
          alt=""
        />
        <strong>
          <a href="https://0s3wk.csb.app/">https://0s3wk.csb.app/</a>
        </strong>
      </div>
    </div>
  );
};
