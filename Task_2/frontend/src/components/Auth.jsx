import { createContext, useContext ,useState,useEffect} from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");



    const storeTokensInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken);
      };




      let isLoggedIn = !!token;

       // function to check the user Authentication or not
  const userAuthentication = async () => {

    if (isLoggedIn){
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // //console.log(data.userData);

        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        //console.error("Error fetching user data");
      }
    } catch (error) {
      //console.log(error);
    }
  }
  };
  
  useEffect(()=>{
    userAuthentication();
  },[])

return (
    <>
    <AuthContext.Provider value={{ isLoggedIn, storeTokensInLS , user}}>
      {children}
    </AuthContext.Provider>
    </>
  );
};

export const  useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };