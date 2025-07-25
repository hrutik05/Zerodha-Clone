import { useEffect } from 'react';

function Signup() {
  useEffect(() => {
    // Redirect immediately to homepage on mount

    
    window.open("http://localhost:3001/", "_blank");
  }, []);

  return Signup; // No UI needed since redirecting
}

export default Signup;
