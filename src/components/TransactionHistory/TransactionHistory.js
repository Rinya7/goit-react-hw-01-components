import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.table_tr}>
          <th className={css.table_th}>Type</th>
          <th className={css.table_th}>Amount</th>
          <th className={css.table_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.table_tr} key={id}>
            <td className={css.table_td}>{type}</td>
            <td className={css.table_td}>{amount}</td>
            <td className={css.table_td}>{currency}USD</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
