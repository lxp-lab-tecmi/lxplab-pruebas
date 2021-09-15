/**
 * To get more icons:
 * 1. Go to https://icons.getbootstrap.com, find the one you like.
 * and copy and pase the path tag in the HTML SVG section.
 * 2. Follow the syntaxis of creating a function with (width, height, fill) => createSVG(width, height, fill, <your path here>).
 * 3. If there are multiple paths, place them inside an array and add the key property to each of them.
 * 4. Remember to rename properties like fill-rule to fillRule.
 */

const WIDTH = 25;
const HEIGHT = 25;
const FILL = "#FFF";
const ICONS = {
  play: (width, height, fill) =>
    createSVG(
      width,
      height,
      fill,
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
    ),

  pause: (width, height, fill) =>
    createSVG(
      width,
      height,
      fill,
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
    ),

  chevronRight: (width, height, fill) =>
    createSVG(
      width,
      height,
      fill,
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    ),

  arrowCounterclockwise: (width, height, fill) =>
    createSVG(width, height, fill, [
      <path key="1" fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />,
      <path
        key="2"
        d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
      />,
    ]),
};

export default ICONS;

function createSVG(width = WIDTH, height = HEIGHT, fill = FILL, path) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className="bi"
      viewBox="0 0 16 16"
    >
      {path}
    </svg>
  );
}
