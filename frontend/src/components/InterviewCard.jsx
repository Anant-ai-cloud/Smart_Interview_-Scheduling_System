import React from "react";

const InterviewCard = ({ name, role, time, date, status }) => {
  return (
    <div className="bg-white p-6 rounded-xl flex justify-between items-center shadow hover:translate-x-1 transition">
      <div className="flex gap-6 items-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-xl flex flex-col items-center justify-center">
          <span className="text-xs font-bold">OCT</span>
          <span className="text-xl font-black">{date}</span>
        </div>

        <div>
          <p className="text-xs">{time}</p>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`px-4 py-1 rounded-full text-xs font-bold ${
            status === "CONFIRMED"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
          View
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;