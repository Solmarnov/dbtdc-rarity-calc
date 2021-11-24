import './style.css'

const Container = props => {
  return (
  <div className="container" id={props.id}>
    {props.children}
  </div>
  )
}

const Row = ({ children }) => {
  return (
    <div className="row">
      {children}
    </div>
  )
}

export { Container, Row }