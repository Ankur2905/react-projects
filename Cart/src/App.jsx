import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";

function App() {
  const { loading } = useGlobalContext();
  if(loading){
    return <main>
      <div className="loading" style={{marginTop:'15rem'}}/>
    </main>
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
