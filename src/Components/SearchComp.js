import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './Search';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }
  const { t } = useTranslation();
  return (
    <section>
      <div style={{margin: '40px 0 40px'}}>
        <h2 className="f2">{t('wsearch')}</h2>
      </div>
      <div style={{margin: '0 0 40px'}}>

        <Form.Control 
          className='me-auto m-auto w-50'
          class="form-control form-control-sm"
          type = 'search'
          placeholder={t('wsearch_hint')}
          onChange={handleChange}
        />
          
      </div>
      {searchList()}
    </section>
  );
}

export default Search;