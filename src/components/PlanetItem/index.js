// Write your code here
const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div>
      <h1>PLANETS</h1>
      <img src={imageUrl} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
