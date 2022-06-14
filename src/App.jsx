import { useState } from "react";
import Button from "./Components/Button";
import CallCss from "./Styles/css/Calculator.module.css";

function App() {
  const [calc, setCalc] = useState("");
  const [results, setResults] = useState("");
  console.log(calc);

  const updateCalc = (values) => {
    const ops = ["/", "*", "+", "-", "."];

    if (
      (ops.includes(values) && calc == "") ||
      (ops.includes(values) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (!ops.includes(values)) {
      setResults(eval(calc + values));
    }

    setCalc(calc + values);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteHandler = () => {
    setCalc(calc.slice(0, -1));
  };

  return (
    <div className={CallCss.App}>
      <div className={CallCss.calculator}>
        <div className={CallCss.display}>
          <span>({results || "0"})</span> {calc || "0"}
        </div>

        <div className={CallCss.action}>
          <div className={CallCss.operators} style={{ display: "flex" }}>
            <div className={CallCss.ops}>
              {["/", "*", "+", "-"].map((el, index) => (
                <Button
                  className={CallCss.button}
                  key={index}
                  onClick={() => updateCalc(el)}
                >
                  {el}
                </Button>
              ))}
            </div>
            <div className={CallCss.secOps}>
              <Button
                className={CallCss.button}
                onClick={() => deleteHandler()}
              >
                DEL
              </Button>
            </div>
          </div>
          <div className={CallCss.digits}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
              <Button
                className={CallCss.button}
                key={el}
                onClick={() => updateCalc(el)}
              >
                {el}
              </Button>
            ))}
            <Button className={CallCss.button} onClick={() => updateCalc(0)}>
              0
            </Button>
            <Button className={CallCss.button} onClick={() => updateCalc(".")}>
              .
            </Button>
            <Button className={CallCss.button} onClick={() => calculate()}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
