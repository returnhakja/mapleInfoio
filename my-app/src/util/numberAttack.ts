export const numberAttack = (num: number | string) => {
  console.log(num);
  if (!num) return;
  const unitWords = ["", "만", "억", "조", "경"];
  const numString = num.toString();
  const chunks: string[] = [];

  // 4자리씩 끊어서 단위를 붙여가면서 배열에 저장합니다.
  for (let i = numString.length; i > 0; i -= 4) {
    chunks.push(numString.slice(Math.max(0, i - 4), i));
  }

  const koreanChunks = chunks.map((chunk, index) => {
    const unit = unitWords[index];
    // 만단위 이상의 경우, 뒷자리 0을 제거한 후 억, 조, 경 단위를 붙여줍니다.
    if (index >= 1 && chunk !== "0000") {
      return `${chunk.replace(/^0+/, "")}${unit}`;
    } else {
      return chunk;
    }
  });

  // 순서를 바꾸기 위해 배열을 역순으로 변환합니다.
  const reversedChunks = koreanChunks.reverse();

  return reversedChunks.join(" ");
};
