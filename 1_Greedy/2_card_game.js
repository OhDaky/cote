function solution(input1, ...input2) {
  // N, M 을 찾기
  const N = Number(input1.split()[0]);
  const M = Number(input1.split()[1]);

  // 입력으로 들어온 행마다 가장 작은 수를 찾고
  // 그 중 가장 큰 값을 찾아 출력
  let arr = [];
  for (let i = 0; i < N; i++) {
    let minimum = 10001;
    minimum = Math.min(minimum, ...input2[i].split(" ").map(Number));
    arr.push(minimum);
  }
  
  return arr.sort()[arr.length - 1];
}