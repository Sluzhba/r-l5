import { Suspense } from "react";
import MessageComponent, { fetchUser,fetchUserWithError } from "./components/MessageComponent";

function App() {
  return (
    <div>
      <h1>Axios Fetch Example</h1>
      <Suspense fallback={<div>Завантаження...</div>}>
          <MessageComponent promise={fetchUser()} />
      </Suspense>

      <Suspense fallback={<div>Завантаження...</div>}>
          <MessageComponent promise={fetchUserWithError()} />
      </Suspense>
    </div>
  );
}

export default App;