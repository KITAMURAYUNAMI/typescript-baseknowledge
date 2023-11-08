//返却値の型指定
export const Practice2 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPlactice = () => {
    console.log(calcTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPlactice}>練習問題2実行</button>
    </div>
  );
};
