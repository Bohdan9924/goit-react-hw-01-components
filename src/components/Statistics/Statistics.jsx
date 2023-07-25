import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const getRandomColor = () => {
  const getRandomHex = () => {
    return Math.round(255 * Math.random()).toString(16);
  };

  const r = getRandomHex();
  const g = getRandomHex();
  const b = getRandomHex();

  return `#${r}${g}${b}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ label, percentage, id} ) => (
          <li key={id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;