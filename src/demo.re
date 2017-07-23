Js.log "Reason!";
let x = [%bs.raw {| 'here is  a string from JS.' |}];
Js.log (x ^ " back in Reason land");

let jsCalculate: array int => int => int = [%bs.raw {|
  function (numbers, scaleFactor) {
    let result = 0
    numbers.forEach(number => {
      result += number
    })
    return result * scaleFactor
  }
|}];

let calculate numbers scaleFactor => jsCalculate (Array.of_list numbers) scaleFactor;
Js.log (calculate [1, 2, 3] 10);
