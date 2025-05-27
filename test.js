/**
 * https://ko.javascript.info/first-steps
 * JS 감각 되살리기
 */

// alert("자바스크립트!");
// [1, 2].forEach(alert);
/*
let Hello = 'Hello world!';
let message;
// Hello의 'Hello world' 값을 message에 복사합니다.
message = Hello;
// 이제 두 변수는 같은 데이터를 가집니다.
alert(Hello); // Hello world!
alert(message); // Hello world!

const COLOR_ORANGE = "#FF7F00";
// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
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

// 변수를 문자열 중간에 삽입
let name = "John";
alert( `Hello, ${name}!` ); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3
*/


/*
// boolean

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

/* object and symbol */

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
// prompt 함수는 사용자가 입력 필드에 기재한 문자열을 반환합니다. 사용자가 입력을 취소한 경우는 null이 반환됩니다.

let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}세입니다.`); // 당신의 나이는 100살 입니다.
*/

/*
// confirm 함수는 사용자가 확인(OK) 또는 취소(Cancel) 버튼을 눌렀는지 여부를 반환합니다. 확인 버튼을 누르면 true가, 취소 버튼을 누르면 false가 반환됩니다.

let isBoss = confirm("당신이 주인인가요?");
alert( isBoss ); // true 또는 false
*/

/* type conversion */

/*
let value = true;
alert(typeof value); // boolean

value = String(value); // boolean -> string
alert(typeof value); // string

value  = true;
alert(typeof value); // boolean

value = null;
alert(typeof value); // null

*/

/*
alert("6"/"2"); // 3, 문자열이 숫자로 변환되어 나눗셈 연산이 수행됩니다.

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자 "123"이 숫자 123으로 변환됩니다.
alert(typeof num); // number
*/

/*
// 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 됩니다.
let age = Number("임의의 문자열 123");
alert(age); // NaN, 숫자가 아닌 문자열을 숫자로 변환하려고 했기 때문에 NaN이 됩니다.

// 숫자형으로 변환 시 적용되는 규칙 
alert( Number("   123   ") ); // 123 whitespace가 제거된 후 숫자 123으로 변환됩니다.
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)

// boolean to number
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// null to number
alert( Number( undefined ) ); // NaN
alert( Number( null ) ); // 0

*/

/*
// 불린형으로 변환 시 적용되는 규칙

// truthy 값들
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean("string") ); // 문자열(true)
alert( Boolean("0") ); // 문자열(true)
alert( Boolean(" ") ); // 문자열(true)

// falsy 값들
alert( Boolean("") ); // 빈 문자열(false)
alert( Boolean(0) ); // 숫자 0(false)
alert( Boolean( undefined ) ); // undefined(false)
alert( Boolean( null ) ); // null(false)
alert( Boolean( NaN ) ); // NaN(false)
*/

/* 연산자 */

/*
// 자바스크립트에서 지원하는 수학 연산자

// 덧셈 연산자 +,
// 뺄셈 연산자 -,
// 곱셈 연산자 *,
// 나눗셈 연산자 /,
// 나머지 연산자 %,
// 거듭제곱 연산자 **

*/

/*
// 문자열 연결 연산자 +

let s = "my" + "string";
alert(s); // mystring

// 문자열 연결 연산자 +는 숫자형 피연산자에 대해서는 문자열로 변환한 후 연결합니다.

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.
alert( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.
*/

/*
// 단항 연산자 + 는 숫자형으로 변환하는 역할을 합니다.
// 숫자에는 아무런 영향을 미치지 않습니다.
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert( +true ); // 1
alert( +"" );   // 0
*/


/* 
// 예제
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // 23, 이항 덧셈 연산자는 문자열을 연결합니다.
*/

/*
// 연산자 우선순위

// 단항 +, -   >>   **   >>   *, /   >>   이항 +, -  >>   =   >>   쉼표 , 

let apples = "2";
let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
alert( +apples + +oranges ); // 5

// `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 기네요.
// alert( Number(apples) + Number(oranges) ); // 5

*/

/*
// 할당 연산자 = 

// x = value을 호출하면 value가 x에 쓰여지고, 이에 더하여 value가 반환됩니다.

let x = 2 * 2 + 1;
alert( x ); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
*/

/*
// 복합 할당

let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).
alert( n ); // 14

n = 2;
n *= 3 + 5;

alert( n ); // 16  (*=의 우측이 먼저 평가되므로, 위 식은 n *= 8과 동일합니다.)
*/

/*
// 증감 연산자
let counter = 2;
counter++;      
alert( counter ); // 3

counter = 2;
counter--;      
alert( counter ); // 1

*/

/*
// 비트 연산자

// 비트 AND ( & )
// 비트 OR ( | )
// 비트 XOR ( ^ )
// 비트 NOT ( ~ )
// 왼쪽 시프트(LEFT SHIFT) ( << )
// 오른쪽 시프트(RIGHT SHIFT) ( >> )
// 부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )

*/

/*
// 쉼표 연산자
// 쉼표 연산자 ,는 여러 표현식을 코드 한 줄에서 평가할 수 있게 해줍니다. 

// 첫 번째 표현식 1 + 2은 평가가 되지만 그 결과는 버려집니다. 3 + 4만 평가되어 a에 할당되죠.
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4의 결과)

// 쉼표 연산자 용례
// 한 줄에서 세 개의 연산이 수행됨
for (a = 1, b = 3, c = a * b; a < 10; a++) {
}
*/

/*
let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
 
alert(a + b); // 12
alert(+a + +b); // 3
*/

/*
let a = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
 
alert(a + b); // 12
*/


/*
// 비교 연산자
// >, <, >=, <=, ==, !=, ===, !==

alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true

let result = 5 > 4; // 비교 결과를 변수에 할당
alert( result ); // true
*/

/*
// 문자열 비교 : lexicographical (사실은 유니코드 순)
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
*/

/*
// 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿉니다.
alert( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
alert( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

alert( true == 1 ); // true
alert( false == 0 ); // true
*/

/*
let a = 0; // 숫자 0
alert( Boolean(a) ); // false

let b = "0"; // 문자열 "0"
alert( Boolean(b) ); // true

alert(a == b); // true!
*/

/*
// 일치 연산자: 자료형의 동등 여부까지 검사
alert( 0 === false ); // false, 피연산자의 형이 다르기 때문입니다.
*/

/*
// null과 undefined 비교

// 동등 연산자 ==는 피연산자가 undefined나 null일 때 형 변환을 하지 않습니다.
// undefined와 null을 비교하는 경우에만 true를 반환하고, 그 이외의 경우(null이나 undefined를 다른 값과 비교할 때)는 무조건 false를 반환합니다. 

alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false 동등연산자는 무조건 false 반환
alert( null >= 0 ); // (3) true 비교연산자는 숫자로 형변환

alert( undefined > 0 ); // false (1) NaN, undefined는 숫자로 변환할 수 없습니다.
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
*/

/* if와 '?'를 사용한 조건 처리 */

/*
let year = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year == 2015) alert("정답입니다!");

if (year == 2015) {
  alert("정답입니다!");
  alert("아주 똑똑하시네요!");
}

// 확정된 불린값 전달하기
let cond = (year == 2015); // 동등 비교를 통해 true/false 여부를 결정합니다.
if (cond) {
}
*/

/*
// if..else문
let year = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year == 2015) {
  alert("정답입니다!");
} else {
  alert("오답입니다!"); // 2015 이외의 값을 입력한 경우
}
*/

/*
let year = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year < 2015) {
  alert("숫자를 좀 더 올려보세요.");
} else if (year > 2015) {
  alert("숫자를 좀 더 내려보세요.");
} else {
  alert("정답입니다!");
}
*/

/*
// 조건부 연산자 ‘?’
// 조건에 따라 다른 값을 변수에 할당해줘야 할 때

// 평가 대상인 condition이 truthy라면 value1이, 그렇지 않으면 value2가 반환됩니다.
let result = condition ? value1 : value2;
*/

/* 
let accessAllowed;
let age = prompt("나이를 입력해 주세요.", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// 위 코드를 조건부 연산자 ‘?’를 사용하여 간단히 표현할 수 있습니다.
accessAllowd = (age > 18) ? true : false;
*/

/*
// 다중 '?' 연산자 사용하기
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );
*/

/*
if ("0") {
  alert("Hello");
}

*/
/*
let result;

if (a + b < 4) {
  result = "미만";
} else {
  result = "이상";
}

// 위 코드를 조건부 연산자 ‘?’를 사용하여 간단히 표현할 수 있습니다.

let result = (a + b < 4) ? "미만" : "이상";
*/


/*
let message;

if (login == "직원") {
  message = "안녕하세요.";
} else if (login == "임원") {
  message = "환영합니다.";
} else if (login == "") {
  message = "로그인이 필요합니다.";
} else {
  message = "";
}

// 조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

let message = (login == "직원") ? "안녕하세요." :
  (login == "임원") ? "환영합니다." :
  (login == "") ? "로그인이 필요합니다." :
  "";
*/

/* 논리 연산자 */
// ||(OR), &&(AND), !(NOT)


/*
// OR 연산자의 추가 기능
// 1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛

// 2. 단락 평가 (short circuit evaluation)
// 왼쪽부터 시작해서 오른쪽으로 평가를 진행하는데, truthy를 만나면 나머지 값들은 건드리지 않은 채 평가를 멈춥니다.

true || alert("not printed");
false || alert("printed");



// 첫 번째 falsy를 찾는 AND 연산자 ‘&&’
// 피연산자에 falsy가 없다면 마지막 값을 반환합니다.

// &&의 우선순위가 ||보다 높습니다.


// NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.
// NOT 연산자의 우선순위는 모든 논리 연산자 중에서 가장 높기 때문에 항상 &&나 || 보다 먼저 실행됩니다.

*/

/*


// 아래 코드의 결과를 예측해 보세요.

alert( alert(1) || 2 || alert(3) );

// 얼럿 창엔 1, 2가 차례대로 출력됩니다.
// alert 메서드는 값을 반환하지 않습니다. 즉, undefined를 반환하죠.


*/


// nullish 병합 연산자(??)
// nullish 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.

/* while 반복문*/
// 반복문 조건엔 비교뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있습니다. 조건은 while에 의해 평가되고, 평가 후엔 불린값으로 변경됩니다.

/* do...while 반복문 */
// 본문을 최소한 한 번이라도 실행하고 싶을 때

/* for 반복문 */

// 구성 요소		
// begin	i = 0	반복문에 진입할 때 단 한 번 실행됩니다.
// condition	i < 3	반복마다 해당 조건이 확인됩니다. false이면 반복문을 멈춥니다.
// body	alert(i)	condition이 truthy일 동안 계속해서 실행됩니다.
// step	i++	각 반복의 body가 실행된 이후에 실행됩니다.

/* break */

// 본문 가운데 혹은 본문 여러 곳에서 조건을 확인해야 하는 경우, ‘무한 반복문 + break’ 조합을 사용하면 좋습니다.

/* continue */
// continue는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있습니다.

// ‘?’ 오른쪽엔 break나 continue가 올 수 없습니다.


/* label */
/*
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`(${i},${j})의 값`, "");

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert("완료!");


// continue 지시자를 레이블과 함께 사용하는 것도 가능합니다. 두 가지를 같이 사용하면 레이블이 붙은 반복문의 다음 이터레이션이 실행됩니다.
*/

// for (let i = 0; i < 10;i++) {
//   if (i % 2) continue;
//   alert(i+2);
// }

// let i = 0;
// while(i < 3){
//   alert(`number ${i}!`);
//   i++;
// }

// let value = 0;
// while(!value) {
//   value = prompt("100 보다 큰 숫자를 입력해주세요.", 0);
//   if (value > 100) {
//     break;
//   } else if (value === null || value === "") {
//     break;
//   } else {
//     value = 0;
//   }
// }

// let num;
// do {
//   num = prompt("100 보다 큰 숫자를 입력해주세요.", 0);
// } while (num <= 100 || num === null || num === "")

// let n = prompt("숫자를 입력해주세요.", null);

// outer: for (let i = 2; i <= n; i++) {
//   inner: for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue outer;
//   }
//   alert(i); // 소수인 경우에만 출력됩니다.
// }

/* switch */

/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
    break;
  case 4:
    alert("비교하려는 값과 일치합니다.");
    break;
  case 5:
    alert("비교하려는 값보다 큽니다.");
    break;
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}

*/

/*
//case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.
switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
  case 4:
    alert("비교하려는 값과 일치합니다.");
  case 5:
    alert("비교하려는 값보다 큽니다.");
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}

*/

/*
let a  = 3;
// 코드가 같은 case문은 한데 묶을 수 있습니다.

switch (a) {
  case 4:
    alert("계산이 맞습니다!");
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert("계산이 틀립니다!");
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert("계산 결과가 이상하네요.");
}

*/

/*
// switch 문에서 자료형의 중요성
let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case "0":
  case "1":
    alert("0이나 1을 입력하셨습니다.");
    break;

  case "2":
    alert("2를 입력하셨습니다.");
    break;

  case 3:
    alert("이 코드는 절대 실행되지 않습니다!");
    break;
  default:
    alert("알 수 없는 값을 입력하셨습니다.");
}

*/

/* 함수 */

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('보호자의 동의를 받으셨나요?');
//   }
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
// }


// function checkAge(age) {
//   return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
// }

/* 함수 표현식 */

// function sayHi() {
//   alert("Hello");
// }

// let sayHi = function () { alert("Hello"); };

// let func = sayHi;

/* 콜백 함수 */

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가  함수의 인수로 전달됨.
ask("동의하십니까?", showOk, showCancel);
// 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것이 콜백 함수의 개념입니다. 
// 위 예시에선 사용자가 "yes"라고 대답한 경우 showOk가 콜백이 되고, "no"라고 대답한 경우 showCancel가 콜백이 됩니다.



ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
// ask(...) 안에 함수가 선언된 게 보이시나요? 이렇게 이름 없이 선언한 함수는 익명 함수(anonymous function) 라고 부릅니다. 익명 함수는 (변수에 할당된 게 아니기 때문에) ask 바깥에선 접근할 수 없습니다. 위 예시는 의도를 가지고 이렇게 구현하였기 때문에 바깥에서 접근할 수 없어도 문제가 없습니다.

*/


/* 함수 표현식 vs 함수 선언문 */

/*
// 자바스크립트 엔진이 함수를 생성하는 시점이 다름

// 함수 선언문: 
// 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
// 전역 함수 선언문은 스크립트 어디에 있느냐에 상관없이 어디에서든 사용할 수 있습니다.
// 자바스크립트는 스크립트를 실행하기 전, 준비단계에서 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성합니다. 
function sum(a, b) {
  return a + b;
}

// 함수 표현식: 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
let sum  = function(a, b) {
  return a + b;
};
*/

/*
// 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.
let age = prompt("나이를 입력해주세요.", 18);

// 조건에 따라 함수를 선언함
if (age < 18)  {
  welcome();

  function welcome() {
    alert("환영합니다!");
  }

  welcome();

} else {
  function welcome() {
    alert("안녕하세요!");
  }
}
// 함수를 나중에 호출합니다.
// 함수 선언문은 함수가 선언된 코드 블록 안에서만 유효하기 때문에 에러가 발생합니다.
welcome(); // Error: welcome is not defined
*/

/*
let age = prompt("나이를 입력해주세요.", 18);

let welcome;

if (age < 18) {
  welcome = function() {
    alert("환영합니다!");
  };

  welcome();
} else {
  welcome = function() {
    alert("안녕하세요!");
  };
}

welcome(); // 제대로 동작합니다.
*/
/*
let age = prompt("나이를 입력해주세요.", 18);
let welcome = (age < 18) 
  ?   function() { alert("환영합니다!");}
  :   function() { alert("안녕하세요!"); };

welcome(); // 제대로 동작합니다.

*/

/* 화살표 함수 */

/*
function ask(question, yes, no) {
  confirm(question) ? yes() : no();
}

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);
*/

