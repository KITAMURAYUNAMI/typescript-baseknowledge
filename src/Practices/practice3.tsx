//変数の型指定

export const Practice3 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPlactice = () => {
    let total: number = 0;
    total = calcTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPlactice}>練習問題3実行</button>
    </div>
  );
};
