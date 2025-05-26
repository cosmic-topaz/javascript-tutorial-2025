/**
 * https://ko.javascript.info/first-steps
 * JS 감각 되살리기
 */

// alert("자바스크립트!");

// alert("Hello")
// alert("World")

// alert(3 + 
// 1
// + 2);

// [1, 2].forEach(alert);

// alert("에러가 발생합니다.")
// [1, 2].forEach(alert)

// alert("제대로 동작합니다.");
// [1, 2].forEach(alert);

// // 이 주석은 한 줄을 다 차지합니다.
// alert("Hello");

// alert("World"); // 이 주석은 문 다음 이어집니다.

// /* 두 줄 짜리 주석 예제
// 이것은 여러 줄의 주석입니다.
// */
// alert('Hello');
// alert('World');

// /* 코드 주석 처리하기
// alert('Hello');
// */
// alert('World');

/*
let message;
message = 'Hello!'; // 문자열을 저장합니다.

alert(message); // Hello!
*/

/*
let user = 'John';
let age = 25;
let message = 'Hello!';
*/

/*
let user = "John"
  , age = 25
  , message = "Hello!";
*/

/*
let user = "John",
  age = 25,
  message = "Hello!";
*/


/*
let message;

message = 'Hello';

message = 'World'; // 값이 변경되었습니다.

alert(message);

*/

/*
let Hello = 'Hello world!';

let message;

// Hello의 'Hello world' 값을 message에 복사합니다.
message = Hello;

// 이제 두 변수는 같은 데이터를 가집니다.
alert(Hello); // Hello world!
alert(message); // Hello world!
*/


/*
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
*/

/*
let admin;
let name;

name = "John";
admin = name;
alert(name); 
*/

/*
let ourPlanetName = "Earth";
let currentUserName;
*/

/*
// no error ‘동적 타입(dynamically typed)’
let message  = "Hello";
message  - 123456;
*/


/*
// numbered type
let n = 123; // integer
n = 12.345; // floating point number

alert( 1/0 ); // 무한대
alert( Infinity ); // 무한대

alert( "숫자가 아님" / 2 ); // NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

alert( "숫자가 아님" / 2 + 5 ); // NaN

// 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;
*/



/*
// string

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// 변수를 문자열 중간에 삽입
alert( `Hello, ${name}!` ); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3
*/


/*
// boolean

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater); // true
*/



/*
// null

let age = null; // 명시적으로 "값이 비어 있음"을 나타냅니다.

*/


/*
// undefined

let age;

alert (age); // undefined, 변수는 선언되었지만 값이 할당되지 않았습니다.
*/



/*
let age = 100;

// 값을 undefined로 바꿉니다.
age = undefined;

alert(age); // undefined



*/

/*
// object and symbol
*/


/*

// typeof

alert(typeof undefined); // undefined
alert(typeof 0); // number
alert( typeof 10n ); // bigint
alert( typeof true ); // boolean
alert( typeof "foo" ); // string
alert( typeof Symbol("id") ); // symbol
alert( typeof Math ); // object, Math는 수학 연산을 제공하는 내장 객체
alert( typeof null ); // object, null은 객체로 잘못 분류되었습니다. null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만, 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다.
alert( typeof alert ); // function, alert는 함수입니다.  '함수’형은 따로 없습니다. 함수는 객체형에 속합니다. 이런 동작 방식이 형식적으론 잘못되긴 했지만, 아주 오래전에 만들어진 규칙이었기 때문에 하위 호환성 유지를 위해 남겨진 상태입니다. 

*/

/*
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya
*/


/* alert, prompt, confirm을 이용한 상호작용 */

/*

//메시지가 있는 작은 창은 모달 창(modal window) 이라고 부릅니다. '모달’이란 단어엔 페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포되어 있습니다. 따라서 사용자는 모달 창 바깥에 있는 버튼을 누른다든가 하는 행동을 할 수 없습니다. 확인 버튼을 누르기 전까지 말이죠.
// alert("Hello");

*/


/*

// 함수가 실행되면 텍스트 메시지와 입력 필드(input field), 확인(OK) 및 취소(Cancel) 버튼이 있는 모달 창을 띄워줍니다.
// title: 사용자에게 보여줄 문자열
// default : 입력 필드의 초깃값(선택값)

result = prompt(title, [default]);

*/

/*

// prompt 함수는 사용자가 입력 필드에 기재한 문자열을 반환합니다. 사용자가 입력을 취소한 경우는 null이 반환됩니다.
let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}세입니다.`); // 당신의 나이는 100살 입니다.

*/



/*

// confirm 함수는 사용자가 확인(OK) 또는 취소(Cancel) 버튼을 눌렀는지 여부를 반환합니다. 확인 버튼을 누르면 true가, 취소 버튼을 누르면 false가 반환됩니다.
// result = confirm(question);

let isBoss = confirm("당신이 주인인가요?");
alert( isBoss ); // true 또는 false

*/