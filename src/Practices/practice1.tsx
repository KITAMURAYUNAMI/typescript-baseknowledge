//引数の型を指定する

export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPlactice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPlactice}>練習問題実行</button>
    </div>
  );
};
