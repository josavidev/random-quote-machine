import styled from 'styled-components';

const QuoteBox = styled.div`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  margin: 10% auto;
  padding: 20px;
  width: 40%;

  .actions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  #new-quote {
    background-color: #3a86ff;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    transition: background-color ease-in-out .3s;
  }

  #new-quote:hover {
    background-color: #6ba4ff;
  }

  .quote {
    padding: 10px 30px;
  }

  #text {
    display: block;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: justify;
  }

  #author {
    display: inline-block;
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: bold;
    margin-right: 20px;
  }

  #tweet-quote {
    color: #3a86ff;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1.25em;
    text-decoration: none;
    transition: color ease-in-out .3s;
  }

  #tweet-quote:hover {
    color: #6ba4ff;
    text-decoration: underline;
  }
`;

export default QuoteBox;