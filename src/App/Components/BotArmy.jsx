import SingleBot from './SingleBot';

const BotArmy = ({ army, removeFromArmy = () => {} }) => {
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {army.map((doc) => {
          return (
            <SingleBot key={doc.id} doc={doc}>
              <p>
                <button onClick={() => removeFromArmy(doc)}>Remove</button>
              </p>
            </SingleBot>
          );
        })}
      </div>
    </div>
  );
};

export default BotArmy;
