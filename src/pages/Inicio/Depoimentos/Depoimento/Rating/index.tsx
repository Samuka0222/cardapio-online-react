import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as estrelaVazia } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RatingProps {
  nota: number;
}

export default function Rating({ nota }: RatingProps) {
  return (
    <span className="text-primary">
      {
        nota === 4
          ? <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={estrelaVazia} />
          </>
          : null
      }
      {
        nota === 4.5
          ? <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </>
          : null
      }
      {
        nota === 5
          ? <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
          : null
      }
      <span className="text-black font-medium ml-2">
        {nota.toFixed(1)}
      </span>
    </span>
  )
}