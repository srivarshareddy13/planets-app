// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets">
      <Slider {...settings}>
        <div>
          {planetsList.map(each => (
            <PlanetItem key={each.id} details={each} />
          ))}
        </div>
      </Slider>
    </div>
  )
}
export default PlanetsSlider
