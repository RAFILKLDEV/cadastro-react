import { useState } from 'react';
import './App.css';
import Account from './components/Account/Account';
import HomePage from './components/Home/Home';
import SignInUp from './components/SignInUp/SignInUp';
import { AuthContext } from './contexts/Auth';



function App() {

  const [tab, setTab] = useState("Home")
  const [email, setEmail] = useState(null)

  return (
    <div className="App">
      <AuthContext.Provider value={{ email, setEmail}}>
        <div className='Header'>
          <div className='Header-menu'>
            <div onClick={() => setTab("Home")}>Home</div>
            <div onClick={() => setTab("Account")}>Account</div>
            
            {email? <div onClick={() => setTab("SignInUp")}>Logout! {email}</div> : <div onClick={() => setTab("SignInUp")}>Sign In/Up</div>}
          </div>
        </div>
        <div className='Content'>
          { (() => {
            switch (tab) {
              case "Home": return <HomePage/>
              case "Account": return <Account/>
              case "SignInUp": return <SignInUp/>
              default: return <HomePage/> 
          }})()}
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
