import PropTypes from 'prop-types';

export function AdvantageCard({ count, text, list }) {
  return (
    <li
      className={`py-4 xl:py-8 px-3 md:px-4 bg-accent rounded-[10px] ${
        list && 'row-span-2'
      }`}
    >
      <p
        className={`text-black text-xs xl:text-2xl font-medium flex items-center gap-2 ${
          list && 'mb-2'
        }`}
      >
        <span className="text-[64px]/[1] md:text-[70px] xl:text-[140px] font-medium">
          {count}
        </span>
        {text}
      </p>
      {list && (
        <ul>
          {list.map((e, i) => (
            <li
              className="text-black text-xs/[1.53] xl:text-2xl/[1.486] font-medium"
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
}

AdvantageCard.propTypes = {
  count: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};
