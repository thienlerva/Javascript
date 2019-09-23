

/*

JSON- Javascript object notation is a minimal, readable format for structring
data. It is used primarily to transmit data between server and client, as
an alternative to XML.

"Lightweight data interchange format "

*/

let person = {
    name: 'GB',
    workplace: 'Revature',
    skills: ['coding', 'talking to people', 'eating']

}

let personStr = JSON.stringify(person);

personStr = "";

////////////

let respString = ""; //fulled with some text
let resp = JSON.parse(respString);

resp.field1;
resp.field2;

