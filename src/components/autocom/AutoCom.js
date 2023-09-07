import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";


class AutoCom extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {

    suggestions: []
    
  };

  
  constructor(props) {
    super(props);

    

    this.state = {

      suggestions: [],
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };

    
    
    
  }

    
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
    if(typeof this.props.selectedValueHandler !=="" || typeof this.props.selectedValueHandler !== undefined){
      this.props.selectedValueHandler(e.currentTarget.value);
    }
    else{
      this.props.selectedValueHandler("");
    }
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    if(typeof this.props.selectedValueHandler !=="" || typeof this.props.selectedValueHandler !== undefined){
      this.props.selectedValueHandler(e.currentTarget.innerText);
    }
    else
    {
      this.props.selectedValueHandler("");
    }
  
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
      if(typeof this.props.selectedValueHandler !=="" || typeof this.props.selectedValueHandler !== undefined){
        this.props.selectedValueHandler(filteredSuggestions[activeSuggestion]);
      }
      else
      {
        this.props.selectedValueHandler("");
      }
    
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        
      }
    }

    return (
      <Fragment>
        <div className="box">
         <input
          type="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          userInput = {this.state.userInput}
          placeholder ="Search..."
        />
        {suggestionsListComponent}
        </div>
      </Fragment>
    );
  }
}

export default AutoCom;
