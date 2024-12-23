export default function Button(props) {
  return (
    <button className={`border px-3 py-2 rounded shadow ${props.classNames}`} onClick={props.onClick}>{props.text}</button>
  )
}