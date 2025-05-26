// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

'use strict';

let userAnswer = prompt("숫자 하나를 입력하세요.", "");
if (userAnswer > 0) {
  alert(1);
} else if (userAnswer < 0) {  
  alert(-1);
} else {
  alert(0);
}
