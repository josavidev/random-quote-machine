import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function Quote({ text, author }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text="${text}--${author}"`;

  return (
    <div className="quote">
      <cite id="text">"{text}"</cite>
      <p id="author">{author}</p>
      <a
        id="tweet-quote"
        target="_blank"
        href={tweetUrl}
      >
        <FontAwesomeIcon icon={faHashtag} />
        philosophizing
      </a>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};