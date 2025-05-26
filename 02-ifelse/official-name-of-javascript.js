// 사용자에게 자바스크립트의 공식 명칭을 묻는 질문을 하고, 사용자의 답변에 따라 다른 메시지를 출력하는 코드입니다.

'use strict';

let userAnswer = prompt("자바스크립트의 '공식' 명칭은 무엇인가요?", "");

if (userAnswer == "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("모르셨나요? 정답은 ECMAScript입니다.");
}
