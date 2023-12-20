import style from "./banner.module.scss";
interface IBannerProps {
  heading: string;
  description: string;
}
const Banner = ({ heading, description }: IBannerProps) => {
  return (
    <div className={style.banner}>
      <div className={style.banner_overlay}></div>
      <div className={style.container}>
        <div className={style.banner_container}>
          <h1 className={style.banner_heading}>{heading}</h1>
          <p className={style.banner_desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
