import React, { useContext, useEffect } from 'react';
import { FitnessContext } from '../FitnessContext';
import { Navigate } from 'react-router-dom';

function Profile() {
  const { user, profile, setProfile } = useContext(FitnessContext);

  


  useEffect(() => {
    console.log('Profile component mounted or user changed');
    console.log('Current user:', user);

    if (user && user._id) {
      fetch(`http://localhost:5000/api/profiles/${user._id}`)
        .then(res => {
          console.log('Backend response status:', res.status);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          console.log('Profile data fetched:', data);
          setProfile(data);
        })
        .catch(err => {
          console.error('Error fetching profile:', err);
          setProfile(null);
        });
    } else {
      console.log('User ID undefined or user not loaded yet.');
      setProfile(null); // To avoid indefinite loading
    }
  }, [user, setProfile]);

  if (!profile) {
    return <div className="p-4">Loading profile...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Your Profile</h1>
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <p><strong>Name:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Age:</strong> {profile.age || 'N/A'}</p>
        <p><strong>Gender:</strong> {profile.gender || 'N/A'}</p>
        <p><strong>Goal:</strong> {profile.goal || 'N/A'}</p>
        <p><strong>Diet:</strong> {profile.diet || 'N/A'}</p>
        <p><strong>Workout Preference:</strong> {profile.workoutPreference || 'N/A'}</p>
      </div>
    </div>
  );
}

export default Profile;
















// import React from 'react';

// function Profile() {
//   return (
//     <div className="max-w-4xl mx-auto mt-6 sm:mt-10 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//         {/* Body section */}
//         <div className="bg-orange-200 rounded-xl shadow p-0 pb-4">
//           <div className="px-4 py-3 sm:px-6 sm:py-3 rounded-t-xl bg-orange-300 font-bold text-lg text-gray-800">
//             Body
//           </div>
//           <div className="px-4 sm:px-6 pt-4">
//             <label className="block mb-2 font-semibold">AGE</label>
//             <input className="border border-blue-200 rounded-lg px-3 py-2 w-full" type="number" placeholder="Enter age" />

//             <div className="flex flex-col sm:flex-row gap-4 mb-4">
//               <div className="flex-1">
//                 <label className="block mb-2 font-semibold">Height (cm)</label>
//                 <input className="border border-blue-200 rounded-lg px-3 py-2 w-full" type="number" placeholder="Enter height" />
//               </div>
//               <div className="flex-1">
//                 <label className="block mb-2 font-semibold">Weight (kg)</label>
//                 <input className="border border-blue-200 rounded-lg px-3 py-2 w-full" type="number" placeholder="Enter weight" />
//               </div>
//             </div>

//             <div className="flex items-center gap-5 mb-2">
//               <span className="font-semibold mr-2">Gender: </span>
//               <label className="inline-flex items-center">
//                 <input type="radio" name="gender" className="accent-purple-500" />
//                 <span className="ml-2">M</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input type="radio" name="gender" className="accent-purple-500" />
//                 <span className="ml-2">F</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Goal section */}
//         <div className="bg-pink-200 rounded-xl shadow p-0 pb-4">
//           <div className="px-4 py-3 sm:px-6 sm:py-3 rounded-t-xl bg-pink-300 font-bold text-lg text-gray-800">Goal</div>
//           <div className="px-4 sm:px-6 pt-4">
//             {["lose fat", "Muscle gain", "stay fit", "atheletic"].map(opt => (
//               <label key={opt} className="flex items-center mb-4">
//                 <input type="radio" name="goal1" className="accent-purple-500" />
//                 <span className="ml-2 text-gray-800 font-medium">{opt}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Health-issues section */}
//         <div className="bg-purple-200 rounded-xl shadow p-0 pb-4">
//           <div className="px-4 py-3 sm:px-6 sm:py-3 rounded-t-xl bg-pink-300 font-bold text-lg text-gray-800">Any health-issues</div>
//           <div className="px-4 sm:px-6 pt-4">
//             {["diabites",'body-pain', 'heart-disease', 'anyother', 'nonde'].map(opt => (
//               <label key={opt} className="flex items-center mb-4">
//                 <input type="radio" name="health" className="accent-purple-500" />
//                 <span className="ml-2 text-gray-800 font-medium">{opt}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Diet and training section */}
//         <div className="bg-green-200 rounded-xl shadow p-0 pb-4">
//           <div className="px-4 py-3 sm:px-6 sm:py-3 rounded-t-xl bg-green-300 font-bold text-lg text-gray-800">Diet and Training</div>
//           <div className="px-4 sm:px-6 pt-4">
//             <label className="block mb-2 font-semibold">Diet</label>
//             <select className="border border-blue-200 rounded-lg px-3 py-2 w-full mb-4">
//               <option value="">Select Diet Preference</option>
//               <option value="veg">Vegetarian</option>
//               <option value="non-veg">Non-Vegetarian</option>
//               <option value="vegan">Vegan</option>
//             </select>

//             <label className="block mb-2 font-semibold">Workout preference</label>
//             <select className="border border-blue-200 rounded-lg px-3 py-2 w-full mb-4">
//               <option>Gym</option>
//               <option>Home</option>
//               <option>open-park</option>
//             </select>

//             <label className="block mb-2 font-semibold">Workout Duration</label>
//             <select className="border border-blue-200 rounded-lg px-3 py-2 w-full mb-4">
//               <option>30 minutes</option>
//               <option>60 minutes</option>
//               <option>90 minutes</option>
//               <option>or-more</option>
//             </select>

//             <button className="px-6 py-2 mt-2 w-full rounded-lg bg-purple-600 text-white font-bold shadow hover:bg-purple-700 transition">Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile;

