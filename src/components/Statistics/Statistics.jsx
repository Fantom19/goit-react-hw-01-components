import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16999215).toString(16)}`;
}

 const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {/* <h2 className={css.title}>{title}</h2> */}
    {title && <h2 className={css.title}>{title}</h2>} 

    <ul className={css.stat_list}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id} style={{ backgroundColor: randomHexColor()}}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

