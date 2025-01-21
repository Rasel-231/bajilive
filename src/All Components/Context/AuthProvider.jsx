// import React, { createContext, useEffect, useState } from 'react';
// import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// export const AuthContext = createContext();
// import auth from '../Firebase/firebase'



// const AuthProvider = ({ children }) => {
//   const [loading,setLoading]=useState(true);
//   const[user,setUser]=useState(null);


// const creatUser=(email,password)=>{
//   setLoading(true)
//   return createUserWithEmailAndPassword(auth, email, password)
// }

// const loginUser=(email,password)=>{
//   setLoading(false)
//   return signInWithEmailAndPassword(auth, email, password)
// }

// const logout=()=>{
//   setLoading(false)
//   return signOut(auth)
// }

// useEffect(()=>{
//   const unsubscribe=onAuthStateChanged(auth,currentUser=>{
//     setUser(currentUser)
//     setLoading(false)
//   })
//  return()=>{
//   unsubscribe();
//  }

// },[])

//   const authInfo = {
//     creatUser,
//     loginUser,
//     logout,

//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Firebase/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Create new user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false)); // Ensure loading is reset after operation
  };

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false)); // Ensure loading is reset after operation
  };

  // Logout user
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => setLoading(false)); // Ensure loading is reset after operation
  };

  // Listen to auth state changes (user login, logout, etc.)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); // Update user state when auth state changes
      setLoading(false); // Set loading to false once the state is updated
    });

    return () => {
      unsubscribe(); // Clean up the subscription when the component unmounts
    };
  }, []);

  const authInfo = {
    user,
    creatUser,
    loginUser,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children} {/* Only render children when loading is complete */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

