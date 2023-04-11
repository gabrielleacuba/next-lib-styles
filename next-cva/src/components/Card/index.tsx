import { CardStyle, TitleStyle } from "./style";
export const Card = () => {
  return (
    <>
      <div
        className={CardStyle()}
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png)`,
        }}
      />

      <h1 className={TitleStyle({ color: "secondary", size: "medium" })}>
        The last of us
      </h1>
    </>
  );
};
