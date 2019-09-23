/**
 * @author Thien Le
 * @name Intro to JS
 * @since 11/6/18
 */

 /**
  * JavaScript is a scripting language used for client-side operations; although 
  * there are frameworks that allow you to write Server-side JS
  * Loosely typed - do not declare variable types. Simply declare variables with the
  * declarative keywords var, let, const. The types of the variables are then
  * dynamically allocated. (see with typeof() operator)
  * 
  * Var scopes:
  *   Global: accessible throughout the entirety of the script and through the browser.
  * Globally scoped variables are anything declared outside of a block or function OR variable
  * that are never declared at all.
  *   Function: declare in function/passed in as parameter, accessible only throughout function.
  *   Block: new to ES6. Can only obtain with variables declared with let or const keywords.
   - Some familiar terms: - if .. else, return, switch, try..catch, do..while, for, break,
   continue, while
   - Load and go delivery
    - Datatypes:
     - number, string, booleans ("primitive types")
     - objects{}
     -undefined ()
  */


  var a = 5;
  var b = 'this is a string with single quotes';
  var c = "this is a string with double quotes. both work";

  var obj = {
      name : 'Thien Le',
      job : 'Student',
      bio : 'I really like food'
  };

  obj.name;
  obj["name"];
  obj["about me"] = "this is how we can create and access properties" + "of our objects"
  + "with spaces in their names; not that you should ever do that";

  obj.age = 100;

  // FOR..IN LOOP - iterate through properties of an object
  for(var pro in obj) {
    //the following includes a few new concepts
    //console.log prints to your client console
    //allow for the easy displaying of data and evaluation of expressions.
    console.log(`${prop}: ${obj[prop]}`);

    y = "the sum of 5 and 10 = ${5+10}`;

    /*
    Data types of JS, and type coertion
    as a loosely typed language that is interruptted and not compiled, JS has
    to be able to accommodate comparisons betwen and manipulation on otherwise incompatiple
     dtat type

     */

     7==7; //true
     7=='7'; //true
     7===7//true
     7==='7'; false

     7+7+7; //21
     7+7+'7';//147
     '7'+7+7; //777

     var exp = (7);
     if(exp) {
         console.log("this is true");
     }
     else {
         console.log("this is false");
     }

     //TRUTHY AND FALSY
     /**
    - everything in JS evaluate to a boolean either true or false
    though we only refer to TRUE and FALSE and true and false, repestively.
    other values have been dubbed "truthy" and "falsy"

    Falsy - ''(empty string), undefined, 0, null, false, NaN
    Truthy - everything else(including 'false')
      */
     function truthOrFalsy(exp) {
         if(exp) return "this is true";
         else return "this is false";
     }

     /*
       Strings
       - o or more 16 bit characters
       - " or", but not for the same string
       - string.length
       -other important methods - charAt, concat, indexOf, replace, split, slice, substring
       -search with regex
       -immutable
     */


     //MORE ON FUNCTIONAL AND ARROW NOTATIONS

     function test() {
         return 0;
     }

     function regularWithParams(a,b) {
         return a+b;
     }

     function doesNotHaveToReturnThings(a,b) {
         console.log(a);
     }

     //func() anonymous
     var func = function(x) {
         console.log("doing cool things with js");
         return x;
     }

     var add = function(a,b) {return a+b};

     var addArrow = (a,b) => {return a+b};

     //scopes, hoising, operators, loops, statements.

     // GUARD AND DEFAULT

     /* GUARD &&

     Takes two operands
     If the first operand is TRUTHY, it returns the 2nd operand(not true/false, but
        the operand itself). Otherwise, it returns the first operand.
     */

     var currentSession = 'hasUser';
     var userInfo = {usename: "gab12", password: '123'}

     var getUser = currentSession && userInfo;

     /*
        DEFAULT ||
        If the first operand is truthy, return it 
        If not return the second operand
     */

     var leaveEarlyByHours = 1;

     var regularLeave = 5;

     var timeOut = leaveEarlyByHours || (regularLeave - leaveEarlyByHours);

     var timeOut = (leaveEarlyByHours > 0) ? regularLeave - leaveEarlyByHours : regularLeave;


     
  }