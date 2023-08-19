import PropTypes from 'prop-types';
import { ApplyButton } from '..';

export const FormatCard = ({ data, btnText }) => {
  const { title, listLabel, list, marketing } = data;

  return (
    <li>
      <h3>{title}</h3>
      <p>{listLabel}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{marketing}</p>
      <ApplyButton data={btnText} isFree={false} />
    </li>
  );
};

FormatCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    listLabel: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
    marketing: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
