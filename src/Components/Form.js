export default function Form({ handleData }) {
  return (
    <div className="left">
      <h3>Create a Task</h3>
      <form id="taskCreator">
        <label htmlFor="name">Task Name</label>
        <input type="text" placeholder="Finish this app!" id="name" />
        <label htmlFor="date">Date</label>
        <input htmlFor="date" id="date" placeholder="12-02-2004" />
        <label htmlFor="assigned">Assigned To</label>
        <input type="text" placeholder="John Doe" id="assigned" />
        <button id="submit" onClick={handleData}>
          Submit
        </button>
      </form>
    </div>
  );
}
