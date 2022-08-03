import UserList from "./components/UserList";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;
