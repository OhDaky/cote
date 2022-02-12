function solution(input) {
  let n = 0;
  n = Number(input.split(" ")[0]);
  const k = Number(input.split(" ")[1]);
  let cnt = 0;
  
  /* 
   n이 k로 나뉘면 계속 나뉘고
   나눠지지 않으면 1을 빼고 k로 나뉘는지 확인
   최대한 많이 나누는 것이 목표
  */
  
  while (n !== 1) {
    if (n % k === 0) {
      n = n / k;
      cnt++;
    } else {
      n--;
      cnt++;
    }
  }

  return cnt;
}