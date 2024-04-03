import './TaskBlock.css'

export default function TaskBlock(props) {

  return (
    <li>
      <div>
        <p className='text'>{props.text}</p>
        <p className='cross' onClick={props.onClick}>❌</p>
      </div>
    </li>
  )
}