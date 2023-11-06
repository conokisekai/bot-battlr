import SingleBot from './SingleBot';

const BotCollection = ({ data, handleAddViewBot = () => [] }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((doc) => {
        return (
          <SingleBot
            key={doc.id}
            doc={doc}
            handleAddViewBot={handleAddViewBot}
          />
        );
      })}
    </div>
  );
};

export default BotCollection;
