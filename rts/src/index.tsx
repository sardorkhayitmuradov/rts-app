import ReactDOM  from "react-dom/client";
import EventComponent from "./events/EventComponent";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element!)

const App = () => {
    return <div>
        <EventComponent/>
    </div>
}

root.render(<App/>)

// export default App;
