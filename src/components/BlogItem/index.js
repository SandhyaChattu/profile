// Write your JS code here
import './index.css'
const listItem = props => {
  const {eachItem} = props
  const {title, description, publisheddate} = eachItem
  return (
    <li className="list-container">
      <div className="for-top-section">
        <h1>{title}</h1>
        <p>{publisheddate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default listItem
