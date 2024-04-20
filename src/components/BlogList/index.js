// Write your JS code here
import BlogItem from '../BlogItem'

const PrepareListItem = props => {
  const {blogsList} = props
  return(
    <ul>{
     blogsList.map(eachItem => {
    <BlogItem key={eachItem.id} eachItem={eachItem} />
     })
    
  }
  </ul>
  )
}
export default PrepareListItem
