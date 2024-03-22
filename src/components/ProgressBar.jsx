export default function ProgressBar({ value, color }) {
  return (
    <div className="progress">
      <div
        className="progress-bar rounded"
        role="progressbar"
        style={{ width: value + "%", backgroundColor: color }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
