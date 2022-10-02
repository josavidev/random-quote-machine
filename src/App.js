import Quote from './components/Quote';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import QuoteBox from './styles/QuoteBox';

export default function App() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useLocalStorage('quotes', []);

  useEffect(() => {
    if (quotes.length === 0) {
      fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
          setQuotes(data.quotes);
          setRandomQuote(data.quotes);
        })
        .catch(err => console.error(err));
      return;
    }
    setRandomQuote(quotes);
  }, []);

  const setRandomQuote = quoteList => {
    const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
    setText(quote.quote);
    setAuthor(quote.author);
  }

  const handleNewQuoteClicked = e => {
    e.preventDefault();
    setRandomQuote(quotes);
  };

  return (
    <QuoteBox id="quote-box">
      <Quote text={text} author={author} />
      <div className="actions">
        <button
          id="new-quote"
          onClick={handleNewQuoteClicked}
        >
          New quote
        </button>
      </div>
    </QuoteBox>
  );
};
