import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Home, About, Event, Find, News, Pantry, ScheduleEvent, Snap, Team, Host, Contact } from "./views";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="event" element={<Event />} />
        <Route path="find" element={<Find />} />
        <Route path="news" element={<News />} />
        <Route path="pantryservices" element={<Pantry />} />
        <Route path="scheduleevent" element={<ScheduleEvent />} />
        <Route path="snap" element={<Snap />} />
        <Route path="team" element={<Team />} />
        <Route path="host" element={<Host />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
