import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword , signOut, onAuthStateChanged, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, updateProfile  } from "firebase/auth";

// initializeFibase 

initializeFirebase();

const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [isLoading, setisLoading ] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    // const adminDe = user.email;

    const googleProvider = new GoogleAuthProvider();

    // new user register
    const registerUser = (email, password, name, history) =>{

        setisLoading(true);

        //save user to the database
        saveUser(email, name, 'post');

        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            setAuthError('');
            history.replace('/');
            
            const newUser = {email, displayName: name};
            setUser(newUser);

            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
             
            }).catch((error) => {
              
            });
            

            
          })
          .catch((error) => {
            
            setAuthError(error.message);
            // ..
          })
          .finally(()=> setisLoading(false));
    }

    // google sing in provider
    
    const signInWithGoogle = (location, history) =>{

      setisLoading(true);

      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const aim = location?.state?.from || '/'
        history.replace(aim)
        const user = result.user;
        saveUser(user.email, user.displayName, 'put');
        setAuthError('');
  }).catch((error) => {
    
    setAuthError(error.message);
   
  }).finally(()=> setisLoading(false));
    }

    // signInWithEmailAndPassword function

    const loginUser = (email, password, location, history )=> {

        setisLoading(true);

        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
          const aim = location?.state?.from || '/'
          history.replace(aim)
            setAuthError('')
          })
          .catch((error) => {
      
            setAuthError(error.message);
          })
          .finally(()=> setisLoading(false));
    }

    //observer user StateChanged

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
             
            } else {
                setUser();
            }
            setisLoading(false);
          });
          return ()=> unsubscribe;
    },[])

    useEffect(()=>{
      fetch(`https://afternoon-inlet-87445.herokuapp.com/users/${user?.email}`)
      .then(res=> res.json())
      .then(data => setAdmin(data.admin))
    },[user?.email])

    // singOUt user
    const logOut = ()=>{
        setisLoading(true)
        signOut(auth).then(() => {
           
          }).catch((error) => {
           
          })
          .finally(()=> setisLoading(false));
    }

    const saveUser = (email, displayName, method)=>{
      const user = {email, displayName};
      fetch('https://afternoon-inlet-87445.herokuapp.com/users', {
        method: method,
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }


    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        signInWithGoogle,
        logOut,
        loginUser,
    }
}



export default useFirebase;