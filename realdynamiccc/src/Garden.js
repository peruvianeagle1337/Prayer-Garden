// Garden.js
import React, { useState } from 'react';

function Garden() {
  // State variables for managing the watering can and plants
  const [waterAmount, setWaterAmount] = useState(0); // Amount of water in the can
  const [plants, setPlants] = useState([
    { id: 1, name: 'Rose', growthStage: 1 },
    { id: 2, name: 'Lily', growthStage: 1 }
  ]);

  // Function to simulate adding prayer time and filling the watering can
  const addPrayerTime = (minutes) => {
    setWaterAmount(waterAmount + minutes); // Each minute of prayer time adds to the water
  };

  // Function to use water from the can to nourish and grow plants
  const waterPlant = (plantId) => {
    if (waterAmount > 0) {
      setPlants(plants.map(plant =>
        plant.id === plantId ? { ...plant, growthStage: plant.growthStage + 1 } : plant
      ));
      setWaterAmount(waterAmount - 1); // Decrease the water amount by 1 unit
    }
  };

  // Function to add a new plant to the garden
  const addPlant = (plantName) => {
    const newPlant = {
      id: plants.length + 1, // Generate a new ID
      name: plantName,
      growthStage: 1 // Start at growth stage 1
    };
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="garden">
      <h2>Your Watering Can</h2>
      <p>Water Amount: {waterAmount}</p>

      {/* Button to add prayer time and fill the watering can */}
      <button onClick={() => addPrayerTime(5)}>Add 5 Minutes of Prayer</button>

      <h2>Plants in Your Garden</h2>
      {plants.map(plant => (
        <div key={plant.id} className="plant">
          <p>{plant.name} - Growth Stage: {plant.growthStage}</p>
          {/* Button to water the plant */}
          <button onClick={() => waterPlant(plant.id)}>Water {plant.name}</button>
        </div>
      ))}

      {/* Button to add a new plant to the garden */}
      <h3>Add a New Plant</h3>
      <button onClick={() => addPlant("Daisy")}>Add Daisy</button>
      <button onClick={() => addPlant("Sunflower")}>Add Sunflower</button>
    </div>
  );
}

export default Garden;
