// component
import WaterMark from "./components/WaterMark"
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SideMenu from "./components/SideMenu";
import MenuButt from "./components/MenuBtn";
import DarkBtn from "./components/DarkMode";
import Spiner from "./components/spiner";

import { auth, useAuthState, } from "./db/index";




function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App mx-auto">
      {user ? <Header /> : <></>}
      <main className="main relative">
        {user ? <SideMenu /> : <></>}
        <section >
          {user ? <ChatRoom /> : <SignIn />}
          <Spiner style='w-full h-full absolute left-0 top-0' />
        </section>
      </main>

    </div>
  );
}

const Header = () => {
  return (
    <header className='header relative'>
      < MenuButt />
      < WaterMark style={'text-2xl'} />
      < DarkBtn />
    </header>
  )
}

export default App;
