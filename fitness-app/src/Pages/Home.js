


import React , { useContext, useEffect,useState } from 'react';
import { FitnessContext } from '../FitnessContext';

function Home(){
const {profile,setProfile,progress,setProgress}=useContext(FitnessContext);
  const [editableWeight, setEditableWeight] = useState(profile?.weight || '');
  const [editableStreak, setEditableStreak] = useState(0);
  const [editableWorkouts, setEditableWorkouts] = useState('');


  //Load current data 
  useEffect(() =>{
    if(profile){
      setEditableWeight(profile.weight || '');
    }
    if(progress.length > 0){
       setEditableStreak(progress[progress.length - 1].streak || 0)
    }
  }, [profile, progress]);


  const handleSaveWeight = ()=>{
    setProfile({...profile, weight: Number(editableWeight)});
  }


    const handleSaveStreak = () => {
    const newProgress = [...progress];
    newProgress.push({ date: Date.now(), streak: editableStreak });
    setProgress(newProgress);
  };

  // Handle manual workout count
  const handleSaveWorkouts = () => {
    setEditableWorkouts(editableWorkouts); // can be connected to backend later
  };

  return(
    <div className='p-4 text-center'>
         <h1 className="text-3xl font-bold text-purple-600 mb-4">Welcome Back 👋</h1>

         {/* DashBoard */}

         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
{/* workout this week */}

<div className='bg-green-100 p-4 rounded-lg shadow'>
<h3 className='font-bold text-green-700 mb-2'>Workouts This Week</h3>
<input 
type='number'
value={editableWorkouts}
onChange={(e) => setEditableWorkouts(e.target.value)}
 className="w-full border rounded p-2 text-center"
            placeholder="Enter workout count"
/>
<button 
onClick={handleSaveWorkouts}
className='bg-green-500 text-white px-3 py-1 mt-2 rounded'>
SAVE
</button>
</div>

{/* current-weight */}

<div className='bg-orange-100 p-4 rounded-lg shadow'>
<h3 className='font-bold text-orange-700 mb-2'>Current Weight</h3>
<input
type='number'
value={editableWeight}
  onChange={(e)=> setEditableWeight(e.target.value)}
  className='w-full border rounded p-2 text-center'
 placeholder="Enter weight in kg"
/>
<button
onClick={handleSaveWeight}
className='bg-orange-500 text-white px-3 py-1 mt-2 rounded'>
  Save
</button>
</div>
{/* Streak */}
<div className='bg-pink-100 p-4 rounded-lg shadow'>
<h3 className='font-bold text-pink-700 mb-2'>Streak (days)</h3>
<input
type='number'
value={editableStreak}
onChange={(e) => setEditableStreak(e.target.value)}
            className="w-full border rounded p-2 text-center"
            placeholder="Type streak value"
/>
<button
onClick={handleSaveStreak}
className='bg-pink-500 text-white px-3 py-1 mt-2 rounded'>
  SAVE
</button>
</div>
         </div>

    </div>
  )
}

// function Home() {
//   return (
//     <div className="w-full max-w-6xl mx-auto mt-6 p-2 sm:p-6 lg:p-8 rounded-3xl shadow-2xl bg-[#F8F9FB] relative">
//       {/* Main container grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
//         {/* Left Side: Targets & Meals */}
//         <div className="flex flex-col gap-6">
//           {/* Targets */}
//           <div className="bg-gradient-to-br from-[#35b6d6] to-[#56a7e7] rounded-2xl shadow-xl px-5 py-5 flex flex-col gap-3">
//             <span className="text-white font-extrabold text-2xl sm:text-3xl mb-2">Today's Targets</span>
//             <div className="flex flex-wrap gap-4">
//               {/* Calories */}
//               <div className="bg-[#F59992] shadow-xl rounded-xl px-7 py-4 flex flex-col justify-between" style={{minWidth:120}}>
//                 <span className="text-white font-bold text-lg mb-1 flex items-center gap-2">
//                   <span className="inline-block">
//                     {/* example icon */}
//                     <svg width={22} height={22} fill="none"><circle cx={11} cy={11} r={11} fill="#fff5f4"/><path d="M11 6a1.5 1.5 0 0 1 1.5 1.5V10h1a1.5 1.5 0 1 1 0 3h-1.5V15a1.5 1.5 0 0 1-3 0v-2h-1a1.5 1.5 0 1 1 0-3h1.5V7.5A1.5 1.5 0 0 1 11 6Z" fill="#fff"/></svg>
//                   </span>
//                   Calories
//                 </span>
//                 <span className="text-3xl font-bold text-white">2100</span>
//               </div>
//               {/* Protein */}
//               <div className="bg-[#F9DF7C] shadow-xl rounded-xl px-7 py-4 flex flex-col justify-between" style={{minWidth:120}}>
//                 <span className="text-[#574300] font-bold text-lg mb-1 flex items-center gap-2">
//                   <span className="inline-block">
//                     {/* example icon */}
//                     <svg width={22} height={22} fill="none"><circle cx={11} cy={11} r={11} fill="#fffbe8"/><ellipse cx="11" cy="11" rx="5" ry="5" fill="#FBCB62" /></svg>
//                   </span>
//                   Protein
//                 </span>
//                 <span className="text-3xl font-bold text-black">110 g</span>
//               </div>
//               {/* Carbs */}
//               <div className="bg-[#B7B3F9] shadow-xl rounded-xl px-7 py-4 flex flex-col justify-between" style={{minWidth:120}}>
//                 <span className="text-[#22246B] font-bold text-lg mb-1 flex items-center gap-2">
//                   <span className="inline-block">
//                     {/* example icon */}
//                     <svg width={22} height={22} fill="none"><circle cx={11} cy={11} r={11} fill="#dcdcff"/><ellipse cx="11" cy="11" rx="5" ry="5" fill="#A398F9" /></svg>
//                   </span>
//                   Carbs
//                 </span>
//                 <span className="text-3xl font-bold text-[#22246B]">140 g</span>
//               </div>
//             </div>
//           </div>
//           {/* Meals cards row */}
//           <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-between">
//             <div className="flex-1 min-w-[160px] bg-[#FAE079] shadow-xl rounded-xl flex flex-col items-start px-6 py-5">
//               <span className="text-[#132858] text-xl font-bold mb-2">Breakfast</span>
//               {/* Optional: SVG icon */}
//               <span className="mb-2">
//                 <svg width={48} height={48} fill="none"><ellipse cx="24" cy="30" rx="18" ry="10" fill="#fffbe8"/><ellipse cx="24" cy="23" rx="12" ry="10" fill="#FFD181" /><ellipse cx="18" cy="23" rx="2" ry="1" fill="#F5A458" /></svg>
//               </span>
//               <span className="text-[#133869] font-semibold text-lg mb-1">Oats, Milk</span>
//               <span className="text-[#133869] text-base">Banana</span>
//             </div>
//             <div className="flex-1 min-w-[160px] bg-[#FFD3B3] shadow-xl rounded-xl flex flex-col items-start px-6 py-5">
//               <span className="text-[#132858] text-xl font-bold mb-2">Lunch</span>
//               <span className="mb-2">
//                 <svg width={48} height={48} fill="none">
//                   <rect x="6" y="18" width="36" height="14" rx="6" fill="#fae1cd"/><rect x="12" y="20" width="12" height="10" rx="5" fill="#FFD181" /><rect x="26" y="20" width="16" height="10" rx="5" fill="#FBCB62" />
//                 </svg>
//               </span>
//               <span className="text-[#133869] font-semibold text-lg mb-1">Paneer</span>
//               <span className="text-[#133869] text-base">2 Rotis, Curd</span>
//             </div>
//             <div className="flex-1 min-w-[160px] bg-[#CFC5F8] shadow-xl rounded-xl flex flex-col items-start px-6 py-5">
//               <span className="text-[#132858] text-xl font-bold mb-2">Dinner</span>
//               <span className="mb-2">
//                 <svg width={48} height={48} fill="none">
//                   <ellipse cx="24" cy="36" rx="18" ry="8" fill="#e6e4ff"/> <ellipse cx="24" cy="24" rx="13" ry="8" fill="#523f99"/><ellipse cx="24" cy="24" rx="10" ry="5" fill="#A398F9"/></svg>
//               </span>
//               <span className="text-[#133869] font-semibold text-lg mb-1">Rajma</span>
//               <span className="text-[#133869] text-base">Rice</span>
//             </div>
//           </div>
//         </div>
//         {/* Right Side: Workout */}
//         <div className="flex flex-col h-full gap-6">
//           <div className="bg-gradient-to-br from-[#7faefc] via-[#a687f6] to-[#796fff] rounded-2xl shadow-xl px-7 py-5 h-full flex flex-col">
//             <span className="text-white text-2xl font-extrabold mb-4">Workout</span>
//             <div className="flex flex-col gap-3 mb-3">
//               <div className="flex items-center text-lg text-white gap-3">
//                 <span className="text-green-300 text-2xl">✔️</span> Goblet Squat
//               </div>
//               <div className="flex items-center text-lg text-white gap-3">
//                 <span className="text-green-300 text-2xl">✔️</span> Lat Pull-down
//               </div>
//               <div className="flex items-center text-lg text-white gap-3">
//                 <span className="text-green-300 text-2xl">✔️</span> Dumbbell Press
//               </div>
//               <div className="flex items-center text-lg text-white gap-3">
//                 <span className="text-green-300 text-2xl">✔️</span> Romanian Deadlift
//               </div>
//             </div>
//             {/* Dumbbell Illustration */}
//             <div className="flex-1 flex items-end">
//               <svg width={90} height={56} viewBox="0 0 90 56" fill="none">
//                 <ellipse cx="67" cy="44" rx="16" ry="8" fill="#aebffc" />
//                 <ellipse cx="23" cy="44" rx="16" ry="8" fill="#aebffc" />
//                 <rect x="25" y="36" width="40" height="16" rx="8" fill="#62a8ff" />
//               </svg>
//             </div>
//           </div>
//           <span className="block mt-2 text-gray-700 font-semibold text-center lg:text-left text-base">Close to target is fine (±10%).</span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;






// import React, { useContext } from 'react';
// import { FitnessContext } from '../FitnessContext';

// function Home() {
//   const { user, profile, progress } = useContext(FitnessContext);

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-3xl font-bold text-purple-600 mb-4">
//         Welcome, {user?.username || 'User'}!
//       </h1>

//       {profile && (
//         <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg mb-4">
//           <h2 className="text-xl font-semibold">Your Goal: {profile.goal}</h2>
//           <p>Weight: {profile.weight} kg | Height: {profile.height} cm</p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//         <div className="bg-green-100 p-4 rounded-lg shadow">
//           <h3 className="font-bold text-green-700">Workouts This Week</h3>
//           <p className="text-2xl">{progress.filter(p => p.workoutDone).length}</p>
//         </div>
//         <div className="bg-orange-100 p-4 rounded-lg shadow">
//           <h3 className="font-bold text-orange-700">Current Weight</h3>
//           <p className="text-2xl">{profile?.weight || '—'} kg</p>
//         </div>
//         <div className="bg-pink-100 p-4 rounded-lg shadow">
//           <h3 className="font-bold text-pink-700">Streak</h3>
//           <p className="text-2xl">{Math.max(...progress.map(p => p.streak || 0), 0)} days</p>
//         </div>
//       </div>
//     </div>
//   );
// }