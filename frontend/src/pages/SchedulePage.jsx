import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import InterviewCard from "../components/InterviewCard.jsx";

const SchedulePage = () => {
  return (
    <div className="bg-[#fff9ec] min-h-screen">
      
      <Topbar />

      <main className="ml-64 pt-24 px-8">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-bold">Interview Pipeline</h2>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">
            + Schedule Interview
          </button>
        </div>

        <div className="space-y-6">
          <InterviewCard
            name="Benjamin Harrison"
            role="Product Designer"
            time="09:30 AM - 10:30 AM"
            date="12"
            status="CONFIRMED"
          />

          <InterviewCard
            name="Isabella Rivera"
            role="Frontend Engineer"
            time="11:00 AM - 12:00 PM"
            date="12"
            status="PENDING"
          />
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;