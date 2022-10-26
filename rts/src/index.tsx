import ReactDOM  from "react-dom/client";
import UserSearch from "./state/UserSearch";
// import GuestList from "./state/GuestList";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element!)

const App = () => {
    return <div>
        {/* <GuestList /> */}
        <UserSearch />
    </div>
}

root.render(<App/>)

// export default App;
