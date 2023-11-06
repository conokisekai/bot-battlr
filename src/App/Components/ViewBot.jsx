import SingleBot from './SingleBot';

const viewBot = ({
  doc = null,
  removeViewBot = () => {},
  Enlist = () => {},
}) => {
  if (doc === null) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
      <SingleBot doc={doc} />
      <p>
        <button onClick={() => Enlist(doc)}>Enlist</button>
      </p>
      <p>
        <button onClick={removeViewBot}>GoBack</button>
      </p>
    </div>
  );
};

export default viewBot;
