import './App.css'
import { useState } from 'react';

const zombieFightersList = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {
  const [ team, setTeam ] = useState([]);
  const [ money, setMoney ] = useState(100);
  const [ zombieFighters ] = useState(zombieFightersList);
  const [ totalStrength, updateStrength] = useState(0)
  const [ totalAgility, updateAgility] = useState(0)


  const handleAddFighter = (fighter) => {
     if(money >= fighter.price){
      let totalMoney;
      let strengthSum;
      let agilitySum;
      let addFighter = [...team];
      totalMoney = money - fighter.price;
      agilitySum = totalAgility + fighter.agility;
      strengthSum = totalStrength + fighter.strength;
      updateStrength(strengthSum);
      updateAgility(agilitySum);
      setMoney(totalMoney);
      addFighter.push(fighter);
      setTeam(addFighter);
    }else {
      console.log('Not enough money');
    }
  }
  const handleRemoveFighter = (fighter) => {
        let totalMoney;
        let strengthSum;
        let agilitySum;
        let finalArr = []
        for(let i = 0; i < team.length; i++){
          if(fighter.name !== team[i].name){
            finalArr.push(team[i])
          }
        }
        totalMoney = money + fighter.price;
        agilitySum = totalAgility - fighter.agility;
        strengthSum = totalStrength - fighter.strength;
        updateStrength(strengthSum);
        updateAgility(agilitySum);
        setMoney(totalMoney);
        setTeam(finalArr);
    
 }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: ${money}</h3>
    <h3>Strength: {totalStrength}</h3>
    <h3>Agility: {totalAgility}</h3>
    <h3>Team: {
    team.length === 0 ?
      'Pick some team members!' :
      <ul>
        {team.map((element, index) => (
        <li key={index}>
        <img src={element.img} alt="" />
        <h2>{element.name}</h2>
        <p>Price: {element.price}</p>
        <p>Strength: {element.strength}</p>
        <p>Agility: {element.agility}</p>
        <button onClick={() => handleRemoveFighter(element)}>Remove</button>
        </li>
      ))}
      </ul>
      }</h3>

    <ul>
      {
      zombieFighters.map((element, index) => (
        <li key={index}>
        <img src={element.img} alt="" />
        <h2>{element.name}</h2>
        <p>Price: {element.price}</p>
        <p>Strength: {element.strength}</p>
        <p>Agility: {element.agility}</p>
        <button onClick={() => handleAddFighter(element)}>Add</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default App