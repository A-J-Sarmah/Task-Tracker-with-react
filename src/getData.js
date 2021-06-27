export default function getData() {
  const task = [];
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      task.push(JSON.parse(localStorage.getItem(i)));
    }
  }
  return task;
}
