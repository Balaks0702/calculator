import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import BtnBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnVal = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Wrapper>
      <Screen value="0" />

      <BtnBox>
        {
          btnVal.flat().map((btn, i) => {
            return (
              <Button key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn} onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </BtnBox>
    </Wrapper>
  );
}

export default App;
