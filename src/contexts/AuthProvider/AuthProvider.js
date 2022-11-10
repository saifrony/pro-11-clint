// import React, {  Children, createContext, useState } from 'react';
// import app from '../../firebase/firebase.config';
// import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

// export const AuthContext = createContext();
// const auth = getAuth(app);


// const AuthProvider = () => {
//     const [load, setLoad]=useState(null);
//     const [loading,setLoading] = useState(true);

//     createUser =(email, password) =>{
//         createUserWithEmailAndPassword(auth,email,password);
//     }

//     const authInfo = {
//         load,
//         loading,
//         createUser
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//                 {Children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;