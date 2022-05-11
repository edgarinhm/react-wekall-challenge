import style from "./recipe-card.module.scss";

interface RecipeCarProps {
  title: string;
  description: string;
  icon: string;
}

const RecipeCard = ({ title, description, icon }: RecipeCarProps) => {
  return (
    <div className={style.cards}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.body}>
        <div className={style.sprites}>
          <img className={style.img_default} src={icon} alt="default icon" />
        </div>
      </div>
      <div className={style.footer}>{description}</div>
    </div>
  );
};

export default RecipeCard;
