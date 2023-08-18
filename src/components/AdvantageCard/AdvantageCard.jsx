import PropTypes from 'prop-types';

export const AdvantageCard = ({ count, text, list: advantagesList }) => {
  return (
    <li
      className={`py-4 xl:py-8 px-3 md:px-4 bg-accent rounded-[10px] ${
        advantagesList && 'row-span-2'
      }`}
    >
      <p
        className={`text-small xl:text-large font-medium flex items-center gap-2 ${
          advantagesList && 'mb-2'
        }`}
      >
        <span className="text-large64/[1] md:text-large70 xl:text-large140/[143px] font-medium">
          {count}
        </span>
        {text}
      </p>
      {advantagesList && (
        <ul>
          {advantagesList.map((e, i) => (
            <li
              className="text-small/[1.53] xl:text-large/[1.486] font-medium"
              key={i}
            >
              {'▪ '}
              {e}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

AdvantageCard.propTypes = {
  count: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};
