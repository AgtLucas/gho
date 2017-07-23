Js.log "Reason!";
let x = [%bs.raw {| 'here is  a string from JS.' |}];
Js.log (x ^ " back in Reason land");
