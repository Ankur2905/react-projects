import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color) => {
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </section>
  );
};
export default ColorList;
