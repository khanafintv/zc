import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 64px 370px 64px 370px;
`;

const FactTitleStyled = styled.h1`
  width: 276px;
  height: 53px;
  margin-bottom: 64px;
  font-weight: 400;
  font-size: 48px;
  line-height: 110%;
`;

const FactTextStyled = styled.p`
  width: 881px;
  min-height: 212px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 48px;
  line-height: 110%;
`;

const FactTimeStyled = styled.p`
  width: 201px;
  height: 24px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.35);
`;

const NewFactBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 81px;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  background: linear-gradient(90deg, #c65252 0%, #5329ca 100%);
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Fact = () => {
  const [fact, setFact] = useState('');

  const fetchFact = async () => {
    let response = await fetch(`https://catfact.ninja/fact`);
    let data = await response.json();
    await setFact(data.fact);
  };

  const getTime = (fact: any) => {
    let arr = fact.split(' ');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length < 3) {
        arr.splice(j, 1);
      }
    }
    let time = Math.ceil(arr.length * 0.3);
    return time;
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <Container>
      <FactTitleStyled>Random fact</FactTitleStyled>
      <FactTextStyled>{fact}</FactTextStyled>
      <FactTimeStyled>Can be read in {getTime(fact)} seconds</FactTimeStyled>
      <NewFactBtn onClick={fetchFact}>Get new fact</NewFactBtn>
    </Container>
  );
};
