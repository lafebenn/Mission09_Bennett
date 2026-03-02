export type Team = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

type TeamCardProps = {
  team: Team;
};

/** Single team card: school name, mascot, and location (city, state). */
function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p className="mascot">{team.name}</p>
      <p className="location">
        {team.city}, {team.state}
      </p>
    </div>
  );
}

export default TeamCard;
