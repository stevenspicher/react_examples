import { useState } from 'react';

let text = "you fit into me like a hook into an eye... a fish hook... an open eye - MARGARET ATWOOD"

function LessText({  maxLength }) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, just render it
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <h1>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <p onClick={() => setHidden(false)}> read more</p>
      ) : (
        <p onClick={() => setHidden(true)}> read less</p>
      )}
    </h1>
  );
}

export default LessText