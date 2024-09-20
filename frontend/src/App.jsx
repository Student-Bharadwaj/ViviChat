import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import { BrowserRouter,Routes,Route  } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Landing/>}  />
      <Route path="/auth" element={<Auth/>}  />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
