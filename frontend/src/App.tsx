import Heading from "./components/Heading";
import TeamList from "./components/TeamList";
import teamsData from "./CollegeBasketballTeams.json";
import "./App.css";

/** Main app: loads team data from JSON and renders heading + list of team cards. */
function App() {
  const teams = teamsData.teams;

  return (
    <div className="app">
      <Heading />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
