import React, { useContext, useEffect, useState } from 'react';
import { FitnessContext } from '../FitnessContext';

function Progress() {
  const {user, progress, setProgress} = useContext(FitnessContext);
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    if(!user||!user._id) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/progress/${user._id}`)
    .then(res =>{
      if(!res.ok) throw new Error('Failed to fetch progress data');
      return res.json();
    })
    .then(data => setProgress(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  }, [user, setProgress]);

  if(loading) return <div className="p-4">Loading progress...</div>;
  if(error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if(!progress || progress.length === 0) return <div className="p-4">No progress data available.</div>;

  return(
    <div className='p-4'>
<h1 className='text-xl font-bold mb-4'>Your Progress</h1>
{
  progress.map((item,i) => (
    <div key={i} className='bg-white p-3 shadow-md rounded-lg mb-2'>

       <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Weight:</strong> {item.weight} kg</p>
          <p><strong>Notes:</strong> {item.notes}</p>
    </div>
  ))
}
    </div>
  )
}










// import React, { useState } from 'react';

// const LinearChartSvg = (
//   <svg width="100%" height="120" viewBox='0 0 280 120'>
//     <polyline 
//       fill='none'
//       stroke='#6366f1'
//       strokeWidth='3'
//       points='15,105 55,85 95,65 135,75 175,50 215,85 255,105'
//     />
//     {[105,85,65,75,50,85,105].map((y,i) =>
//       <circle key={i} cx={15+40*i} cy={y} r="5" fill="#6366f1" />
//     )}
//     <line x1="15" y1="105" x2="255" y2="105" stroke="#e5e7eb" />
//   </svg>
// );

// function Progress() {
//   const [weight, setWeight] = useState('');

//   return (
//     <div className="px-2 py-6 sm:p-6 md:p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//         {/* Today's entry card */}
//         <div className="bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex-1 mb-4 md:mb-0">
//           <h2 className="text-xl font-bold mb-4 sm:mb-6">Today's entry</h2>
//           <label className="block mb-1 font-semibold">Today's weight (kg)</label>
//           <input
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             placeholder="Enter weight"
//           />
//           <label className="block mb-3 font-semibold">Workout done?</label>
//           <div className="flex gap-2 mb-6 flex-wrap">
//             <button className="bg-cyan-600 text-white rounded-md px-8 py-2 font-semibold w-full sm:w-auto">Yes</button>
//             <button className="bg-gray-100 text-gray-700 rounded-md px-8 py-2 font-semibold w-full sm:w-auto">No</button>
//           </div>
//           <button className="bg-purple-600 text-white w-full rounded-lg py-3 font-bold text-lg hover:bg-purple-700 transition">Save</button>
//         </div>

//         {/* Chart and streak column */}
//         <div className="flex flex-col gap-6 md:gap-8">
//           {/* Chart card */}
//           <div className="bg-white rounded-xl shadow p-4 sm:p-6 md:p-8">
//             <h2 className="text-xl font-bold mb-3 sm:mb-5">Weight Last 7 days</h2>
//             <div className="w-full overflow-x-auto">{LinearChartSvg}</div>
//             <div className="flex justify-between pt-2 px-1 text-gray-500 text-sm font-semibold">
//               <span>Mon</span>
//               <span>Tu</span>
//               <span>We</span>
//               <span>Thu</span>
//               <span>Fu</span>
//               <span>Sa</span>
//               <span>Su</span>
//             </div>
//           </div>
//           {/* Streak card */}
//           <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex items-center space-x-4">
//             <div className="text-3xl text-green-500 flex items-center">
//               <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#34d399" /><path d="M13 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//             </div>
//             <div>
//               <span className="font-bold text-lg">Current Streak: 3 days</span>
//               <div className="text-gray-600 mt-1 text-sm">This week: 3/4 workouts done</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Progress;
