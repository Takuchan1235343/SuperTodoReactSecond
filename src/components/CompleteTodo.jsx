const style = {
  backgroundColor: '#aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const CompleteTodo = (props) => {
  const { tasks, onClickBack } = props
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="list-row">
              <p className="todo-item">{task.title}</p>
              <button onClick={() => onClickBack(task.id)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}