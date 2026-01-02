import { useState, useEffect } from "react";

const SoldierCard = ({ name, rank, cost, onDeploy, canAfford }) => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      <h3>{name}</h3>
      <p>Rank: {rank}</p>

      <button
        onClick={() => onDeploy(cost)}
        disabled={!canAfford}
      >
        Deploy ({cost}g)
      </button>
    </div>
  );
};

const App = () => {
  const [gold, setGold] = useState(1000);
  const [soldiers, setSoldiers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSoldiers([
        { id: 1, name: "En", rank: "Lieutenant", cost: 50 },
        { id: 2, name: "Kyou Kai", rank: "Lieutenant", cost: 150 },
        { id: 3, name: "Ri Shin", rank: "General", cost: 100 }
      ]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDeploy = (cost) => {
    if (gold < cost) {
      alert("Not enough gold");
      return;
    }

    setGold(prevGold => prevGold - cost);
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Kingdom Manager</h1>
      <h3>Treasury: {gold} Gold</h3>
      <hr />

      {isLoading ? (
        <p>Scouting for recruits...</p>
      ) : (
        soldiers.map(soldier => (
          <SoldierCard
            key={soldier.id}
            name={soldier.name}
            rank={soldier.rank}
            cost={soldier.cost}
            onDeploy={handleDeploy}
            canAfford={gold >= soldier.cost}
          />
        ))
      )}
    </div>
  );
};

export default App;
