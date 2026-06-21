
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Dashboard</h1>
      <div className="flex gap-4 justify-center mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p>Total Jobs :</p>
          <h4>12</h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p>Total Candidates :</p>
          <h4>500</h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p>Total Hired :</p>
          <h4>15</h4>
        </div>
      </div>
    </div>    
  )
}

export default Dashboard