// expressions are used to run valid js expressions

const name = "Ash";
const mutiply = (a, b) => a * b;
const sortAList = (arr) => arr.sort((a, b) => a - b).join(",");

export const ShowExpressions = () => {
  return <>
  <h1>UserName:{name}</h1>
  <p>Here we mutiply 2*3 number:{mutiply(2*3)}</p>
  <p>Here we sort a list:{sortAList([10,4,89,5,3,2,9])}</p>

  </>;
};
