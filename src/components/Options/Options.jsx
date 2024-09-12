import css from './Options.module.css';

const Options = ({ updater, total }) => {
  return (
    <div className={css.feedback}>
      <button onClick={() => updater('good')}>Good</button>
      <button onClick={() => updater('neutral')}>Neutral</button>
      <button onClick={() => updater('bad')}>Bad</button>
      {total > 0 && <button onClick={() => updater('reset')}>Reset</button>}
    </div>
  );
};

export default Options;
