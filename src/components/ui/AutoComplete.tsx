import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface IProps {
    suggestions:string[]
}

const AutoComplete = ({ suggestions }:IProps) => {
  const [activeSuggestion, setActiveSuggestion] = useState();
  const [filteredSuggestions, setFilteredSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setIput] = useState('');

  const onChange = (e:any) => {
    const userInput = e.currentTarget.value;

    const filteredSugg = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSugg);
    setShowSuggestions(true);
    setIput(e.currentTarget.value);
  };

  const onClick = (e:any) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setIput(e.currentTarget.innerText);
  };

  const onKeyDown = (e:any) => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setIput(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(-1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;
  if (showSuggestions && input) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion:string, index:number) => {
                      let className;

                      // Flag the active suggestion with a class
                      if (index === activeSuggestion) {
                        className = 'suggestion-active';
                      }

                      return (
                            <li
                                className={className}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                      );
                    })}
                </ul>
      );
    } else {
      suggestionsListComponent = (
                <div className="no-suggestions">
                    <em>categoria nao existe</em>
                </div>
      );
    }
  }


  return (
      <Form.Group >
          <Form.Label>Category</Form.Label>
          <Form.Control
              type="string"
              placeholder="digite para pesquisar"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={input}
          />
          {suggestionsListComponent}
      </Form.Group>
  );
};

export default AutoComplete;
