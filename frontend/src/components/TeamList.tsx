import TeamCard, { type Team } from "./TeamCard";

type TeamListProps = {
  teams: Team[];
};

/** Renders a card for each team in the list. */
function TeamList({ teams }: TeamListProps) {
  return (
    <section className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  );
}

export default TeamList;
