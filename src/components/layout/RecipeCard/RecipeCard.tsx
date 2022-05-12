import style from "./recipe-card.module.scss";

interface RecipeCarProps {
  title: string;
  description: string;
  icon: string;
  rating: number;
}

const RecipeCard = ({ title, description, icon, rating }: RecipeCarProps) => {
  return (
    <div className={style.cards}>
      <div className={style.cards_body}>
        <div className={style.cards_inner_container}>
          <img
            className={style.cards_img_default}
            src={icon}
            alt={`${title} icon`}
          />
        </div>
      </div>
      <div className={style.cards_footer}>
        <h3 className={style.cards_title}>{title}</h3>
        <div className={style.cards_rating}>
          <span
            className="rating-star active"
            aria-hidden="true"
            data-rating="1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="rating-star-filled"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
          </span>
          <span
            className="rating-star active"
            aria-hidden="true"
            data-rating="1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="rating-star-filled"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
          </span>
          <span
            className="rating-star active"
            aria-hidden="true"
            data-rating="1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="rating-star-filled"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
          </span>
          <span
            className="rating-star active"
            aria-hidden="true"
            data-rating="1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="rating-star-filled"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
          </span>
          <span
            className="rating-star active"
            aria-hidden="true"
            data-rating="1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="rating-star-filled"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
          </span>
          <span className="ratings-count elementFont__details">{rating}</span>
        </div>
        <div className={style.cards_details}>{description}</div>
      </div>
    </div>
  );
};

export default RecipeCard;
