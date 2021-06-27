export default function Task({ data, done, remove }) {
  return (
    <div className="right">
      <h3>Existing Tasks</h3>
      <div id="task-container">
        <ul id="tasks">
          {data.map((task) => {
            if (task.isDone === true) {
              return (
                <li title="Click item to delete" key={task.id}>
                  <p
                    className="data done"
                    id={task.id}
                    onClick={(e) => {
                      done(e.target.id);
                    }}
                  >
                    {task.task}
                    <span>{task.date}</span>
                    <span className="assigned">{task.name}</span>
                  </p>
                </li>
              );
            } else {
              return (
                <li title="Click item to delete" key={task.id}>
                  <p
                    className="data"
                    id={task.id}
                    onClick={(e) => {
                      done(e.target.id);
                    }}
                  >
                    {task.task}
                    <span>{task.date}</span>
                    <span className="assigned">{task.name}</span>
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <button id="remove" onClick={remove}>
        Remove All
      </button>
    </div>
  );
}
