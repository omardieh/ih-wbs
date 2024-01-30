
import Rating from './Rating'

const DriverCard = (props) => {
  const { name, rating, img, car } = props

  return (
    <div className="DriverCard">
      <img src={img} alt="profileImage" />
      <div className="driverInfo">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <div>{car.model} - {car.licensePlate} </div>
      </div>
    </div>
  )
}

export default DriverCard;
// import Rating from './Rating';

// export default function DriverCard({name, rating, img, car}) {
//     return (
//         <div>
//             <img style={{width: "7vw"}} src={img} />
//             <div>
//                 <h3>{name}</h3>
//                 <p><Rating>{rating}</Rating></p>
//                 <p>{car.model} - {car.licensePlate}</p>
//             </div>
//         </div>
//     )
// }