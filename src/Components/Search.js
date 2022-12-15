import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div className="d-flex justify-content-around flex-wrap" style={{ gap: '20px'}}>
      {filtered}
    </div>
  );
}

export default SearchList;