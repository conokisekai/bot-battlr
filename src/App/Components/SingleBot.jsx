let testData = {
  id: 101,
  name: 'wHz-93',
  health: 94,
  damage: 20,
  armor: 63,
  bot_class: 'Support',
  catchphrase: '1010010101001101100011000111101',
  avatar_url:
    'https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1',
  created_at: '2018-10-02T19:55:10.800Z',
  updated_at: '2018-10-02T19:55:10.800Z',
};

const SingleBot = ({
  doc = testData,
  handleAddViewBot = () => {},
  children,
}) => {
  return (
    <div
      style={{ border: '2px solid black', margin: '20px' }}
      onClick={() => handleAddViewBot(doc)}
    >
      <h3>Name: {doc.name}</h3>
      <img src={doc.avatar_url} />
      <p>Health: {doc.health}</p>
      <p>Damage: {doc.damage}</p>
      <p>Armor: {doc.armor}</p>
      <p>Class: {doc.bot_class}</p>
      <p>Catchphrase: {doc.catchphrase}</p>

      {children}
    </div>
  );
};

export default SingleBot;
