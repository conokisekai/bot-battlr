import SingleBot from './SingleBot';

const BotArmy = ({ army, removeFromArmy = () => {}, deleteBots }) => {
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {army.map((doc) => {
          return (
            <SingleBot key={doc.id} doc={doc}>
              <p>
                <button onClick={() => removeFromArmy(doc)}>Remove</button>
                <button onClick={() =>{
                  removeFromArmy(doc)
                  deleteBots(doc.id)
                }}>X</button>
              </p>
            </SingleBot>
          );
        })}
      </div>
    </div>
  );
};

export default BotArmy;
