import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setBtc } from "../reducers/coin";
const ExchangeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #90abbf;
  font-weight: 800;
  color: white;
  text-shadow: 1px 1px 5px #545454;
  height: 35px;
  @media (max-width: 768px) {
    width: 100%;
    height: 33px;
  }
`;
const Info = styled.p`
  padding-left: 5px;
  padding-right: 2px;
  font-size: 1rem;
  margin: 0;
  padding: 4px;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    word-break: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 581px) {
    font-size: 0.75rem;
  }
`;
function CurrentExchangeBar() {
  const dispatch = useDispatch();
  const { upbitBitKrw, usdToKrw, binanceBitUsdt } = useSelector(
    (state) => state.coin
  );
  const convertUsdToKrw = useCallback(() => {
    const converted = parseFloat(binanceBitUsdt, 10) * usdToKrw;
    return converted.toFixed(2);
  }, [binanceBitUsdt, usdToKrw]);
  useEffect(() => {
    const converted = convertUsdToKrw(),
      percent = (
        ((parseFloat(upbitBitKrw, 10) - convertUsdToKrw()) /
          convertUsdToKrw()) *
        100
      ).toFixed(2);
    dispatch(
      setBtc({
        symbol: "BTC",
        last: upbitBitKrw,
        converted: parseFloat(converted, 10),
        percent: parseFloat(percent, 10),
      })
    );
  }, [convertUsdToKrw, dispatch, upbitBitKrw]);
  return (
    <>
      <ExchangeContainer>
        <Info>{`1$: ${usdToKrw}₩`}</Info>
        <Info>{`업비트: ${upbitBitKrw} BTC/KRW`}</Info>
        <Info>{`바이낸스: ${convertUsdToKrw()} BTC/KRW`}</Info>
        <Info>{`차이: ${(
          ((parseFloat(upbitBitKrw, 10) - convertUsdToKrw()) /
            convertUsdToKrw()) *
          100
        ).toFixed(2)}%`}</Info>
      </ExchangeContainer>
    </>
  );
}
export default CurrentExchangeBar;
