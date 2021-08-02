import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <li
            className={s.item}
            key={el.id}
            style={{ backgroundColor: colorGen() }}
          >
            <span className="label">{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  return backgroundColor;
}
