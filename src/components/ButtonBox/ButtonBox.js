import React, { useState } from 'react';
import { ButtonBoxS } from "./ButtonBoxStyled";
import { Buttons } from "../Button/ButtonStyled";
import { ScreenS } from "../Screen/ScreenStyled";


function ButtonBox(){
    const [result, setResult] = useState(0);

    const [broj,setBroj] = useState("");
    const [broj1,setBroj1] = useState("");
    const [fill,setFill] = useState(true);
    const [racunskaOperacija,setRacunskaOperacija] = useState("");

    function uneseniBroj(e) {
        
        if (fill) {
          setBroj(broj + e.target.value);
        } else {
          setBroj1(broj1 + e.target.value)
        }
      }

    const clear = () =>{
        setResult(null)
        setBroj("")
    }

    function PozivanjeOperacija(e) {
      if (racunskaOperacija === "") {
        setRacunskaOperacija(e.target.value);
        setFill(false);
      }
    }


    console.log(result);
    function Operacije() {
        if (racunskaOperacija === "+") {
          setResult(parseFloat(broj) + parseFloat(broj1));
        } else if (racunskaOperacija === "-") {
          setResult(parseFloat(broj) - parseFloat(broj1));
        } else if (racunskaOperacija === "x") {
          setResult(parseFloat(broj) * parseFloat(broj1));
        } else if (racunskaOperacija === "/" && broj === "0") {
          alert("Ne moze se dijeliti s nulom!");
          clear();
          return;
        } else if (racunskaOperacija === "/"){
          setResult(parseFloat(broj) / parseFloat(broj1));
        } 
        setBroj("");
        setBroj1("");
        setFill(true);
      }

    return(
        <>
        <ButtonBoxS>
            <div class= "item1"><ScreenS>
                {result}
            </ScreenS></div>
            <Buttons onClick={clear} color="#707070">C</Buttons>
            <Buttons color="#707070">+/-</Buttons>
            <Buttons color="#707070">%</Buttons>
            <Buttons value="/" onClick={PozivanjeOperacija} color="#fbb034">/</Buttons>
            <Buttons value="7" onClick={uneseniBroj}>7 </Buttons>
            <Buttons value="8" onClick={uneseniBroj}>8</Buttons>
            <Buttons value="9" onClick={uneseniBroj}>9</Buttons>
            <Buttons value="x" onClick={PozivanjeOperacija} color="#fbb034">x</Buttons>
            <Buttons value="4" onClick={uneseniBroj}>4</Buttons>
            <Buttons value="5" onClick={uneseniBroj}>5</Buttons>
            <Buttons value="6" onClick={uneseniBroj}>6</Buttons>
            <Buttons value="-" onClick={PozivanjeOperacija} color="#fbb034">-</Buttons>
            <Buttons value="1" onClick={uneseniBroj}>1</Buttons>
            <Buttons value="2" onClick={uneseniBroj}>2</Buttons>
            <Buttons value="3" onClick={uneseniBroj}>3</Buttons>
            <Buttons value="+" onClick={PozivanjeOperacija} color="#fbb034">+</Buttons>
            <Buttons value="0" onClick={uneseniBroj} id="item18">0</Buttons>
            <Buttons>.</Buttons>
            <Buttons value="=" onClick={Operacije} color="#fbb034">=</Buttons>
        </ButtonBoxS>
        </>
    );
}

export default ButtonBox;