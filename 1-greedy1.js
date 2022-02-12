function solution(input1, input2) {
  // 출력할 결과값
  let res = 0;

  // input1 은 첫째 줄에 받는 입력
  // input2 는 둘째 줄에 받는 입력
  const N = Number(input1.split(' ')[0]);
  const M = Number(input1.split(' ')[1]);
  const K = Number(input1.split(' ')[2]);

  // 빈 배열에 둘째 줄에 받은 입력을 넣음
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Number(input2.split(' ')[i]));
  }
  arr.sort((a, b) => b - a);
  const a = arr[0], b = arr[1];
  // arr 배열에서 제일 큰 수와 그 다음 큰 수만 이용하면 문제를 풀 수 있다.
  // 가장 큰 수 a, 두번째 수 b
  // a !== b -> a를 K번 더하고 b더하고 다시 a를 K번
  // a === b -> a * K
  if (a === b) return a * K;
  else {
    // a를 더하는 횟수
    let cnt = Math.floor(M / (K + 1) * K);
    res += a * cnt + b * (M - cnt);
    return res;
  }
}