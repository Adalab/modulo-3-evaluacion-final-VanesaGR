import CharacterCard from './CharacterCard';

const CharactersList = ({ FilteredCharacters }) => {
    console.log(FilteredCharacters);
  const listCharacter = FilteredCharacters.map((eachCharacter) => {
    return (
      <CharacterCard
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></CharacterCard>
    );
  });
  return (
    <section>
      <ul className="character-list">{listCharacter}</ul>
    </section>
  );
};

export default CharactersList;