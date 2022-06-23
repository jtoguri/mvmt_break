
export default function UserHistory({ history }) {
  
  const historyList = history.map(data => { 
    const localDate = new Date(data.date).toDateString(); 

    return (
      <li key={data._id}>
        <p>Date: {localDate}</p>
        <p>Exercise: {data.exercise.name}</p>
      </li>
    );
  });

  return (
    <div>
      <h2>History</h2>
      <ul>{historyList}</ul>
    </div>
  );
}
