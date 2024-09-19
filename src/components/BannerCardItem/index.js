// Write your code here.
import './index.css'

const Card = props => {
  const {head, key, description, clas} = props
  return (
    <li className={clas} id={key}>
      <h1>{head}</h1>
      <p>{description}</p>
      <div>
        <button className="p">Show More</button>
      </div>
    </li>
  )
}
export default Card
