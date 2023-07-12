import { NavLink } from 'react-router-dom';
import style from './dialogs.module.css';

const names = [
  {name: 'Grisha', id: '1'}, 
  {name: 'Nikita', id: '2'},
  {name: 'Anatoliy', id: '3'}
]

const messages = [
  {message: 'Привет'},
  {message: 'Как сам'}
]

function Message(props) {
  return (
    <div>{props.message}</div>
  )
}

function DialogItem(props) {
  let path = `/dialogs/${props.id}`

  return (
    <li className={style.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

let messagesItems = messages.map( m => <Message message={m.message} /> )
let dialogs = names.map(n => <DialogItem name={n.name} id={n.id}/>)

function Dialogs() {
  return (
    <div className={style.dialogs}>
      <ul className={style.list}>
        { dialogs }
      </ul>
      <div className={style.messages}>
        { messagesItems }
      </div>
    </div>
  )
}

export default Dialogs;