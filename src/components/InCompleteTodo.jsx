const style = {
  border: '2px solid #aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const IncompleteTodo = (props) => {
  const { tasks, onClickComplete, onClickDelete } = props
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="list-row">
              <p className="todo-item">{task.text}</p>
              <button onClick={() => onClickComplete(task.id)}>完了</button>
              <button onClick={() => onClickDelete(task.id)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}