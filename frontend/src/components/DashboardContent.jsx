function DashboardContent() {
  return (
    <div className="max-w-xl mx-auto ml-auto mt-32">

      <h1 className="text-3xl font-bold mb-6">
        Systems Overview
      </h1>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8 bg-white w-72 p-6 rounded-xl">
          <h2 className="font-bold mb-4">Total Interviews</h2>

          <div className="flex gap-2 items-end h-40">
            <div className="bg-orange-300 w-full h-[40%]"></div>
            <div className="bg-orange-300 w-full h-[70%]"></div>
            <div className="bg-orange-500 w-full h-[90%]"></div>
          </div>
        </div>

        <div className="col-span-4 space-y-6">
          <div className="bg-white p-4 rounded-xl">
            <h3>New HR Accounts</h3>
            <p className="text-3xl font-bold">42</p>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <h3>Active Interviewers</h3>
            <p className="text-3xl font-bold">156</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DashboardContent;