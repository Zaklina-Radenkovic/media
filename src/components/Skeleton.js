import classNames from "classnames";

const Skeleton = ({ times, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className //this allows us to add width/height of boxes accordingly
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  //create a new array with a length or number of
  //items in it equal to that times variable or the times prop.
  //We then iterate over that array and for every element inside there we create a new div and return it.
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames}></div>
        </div>
      );
    });

  return boxes;
};
export default Skeleton;
