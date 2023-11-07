import React, { useState, useEffect } from 'react';

import BotCollection from './Components/BotCollection';
import ViewBot from './Components/ViewBot';
import BotArmy from './Components/BotArmy';

const App = () => {
  const [data, setData] = useState([]);
  const [viewBot, setViewBot] = useState(null);

  const [army, setArmy] = useState([]);

  function fetchBots() {
    fetch('http://localhost:8001/bots', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((bots) => {
        setData(bots);
      });
  }

  useEffect(() => {
    fetchBots();
  }, []);

  function handleAddViewBot(doc) {
    setViewBot(doc);
  }

  function removeViewBot() {
    setViewBot(null);
  }

  function Enlist(doc) {
    for (let bot of army) {
      if (bot.id === doc.id) return;
    }
    setArmy([doc, ...army]);
  }

  function removeFromArmy(doc) {
    let armyBots = army.filter((bot) => (bot.id === doc.id ? false : true));
    setArmy(armyBots);
  }

  function deleteBots(id) {
    fetch('http://localhost:8001/bots/' + id, {
      method: 'DELETE',
    });
  }

  return (
    <div>
      <BotArmy
        army={army}
        removeFromArmy={removeFromArmy}
        deleteBots={deleteBots}
      />
      <ViewBot doc={viewBot} removeViewBot={removeViewBot} Enlist={Enlist} />
      <BotCollection data={data} handleAddViewBot={handleAddViewBot} />
    </div>
  );
};

export default App;
