import "./App.css";

import {
  Bracket,
  Seed,
  SingleLineSeed,
  SeedItem,
  SeedTeam,
} from "react-brackets";

import { NoConnectorSeed } from "./components/customSeed";

import rounds from "./data";

const CustomSeed = ({ seed, breakpoint, roundIndex }) => {
  const isLineConnector =
    rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

  const hasNextGame = typeof rounds[roundIndex + 1] !== "undefined";

  let Wrapper;

  if (isLineConnector) {
    Wrapper = SingleLineSeed;
  } else {
    if (hasNextGame) {
      Wrapper = Seed;
    } else {
      Wrapper = NoConnectorSeed;
    }
  }

  const [teamA, teamB] = seed.opponents.map(({ opponent }) => opponent);

  console.log(
    `${teamA.name} vs ${teamB.name}: ${isLineConnector}, ${hasNextGame}`
  );

  return (
    <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam>{teamA.name}</SeedTeam>
          <SeedTeam>{teamB.name}</SeedTeam>
        </div>
      </SeedItem>
    </Wrapper>
  );
};

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Bracket
          rounds={rounds}
          renderSeedComponent={CustomSeed}
          bracketClassName="center"
        />
      </div>
    </div>
  );
}

export default App;
