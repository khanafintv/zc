import { useEffect, useState } from 'react';
import { FactItem } from '../components/FactItem';
import styled from 'styled-components';
import { MyPagination } from '../components/MyPagination';

const FactsListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContainerStyled = styled.div`
  padding-left: 370px;
  padding-right: 370px;
  padding-bottom: 104px;
  padding-top: 64px;
`;

const TitleStyled = styled.h1`
  margin-bottom: 72px;
  font-weight: 400;
  font-size: 48px;
  line-height: 110%;
`;

export const Facts = () => {
  const [facts, setFacts]: any = useState({});

  const fetchFacts = async (page: number = 1, limit: number = 10) => {
    let response = await fetch(
      `https://catfact.ninja/facts?page=${page}&limit=${limit}`
    );
    let data = await response.json();
    setFacts(data);
  };

  useEffect(() => {
    fetchFacts();
  }, []);

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

  return (
    <ContainerStyled>
      <TitleStyled>List of facts</TitleStyled>
      <FactsListStyled>
        {facts.data?.map((i: any) => {
          return <FactItem key={i.fact} fact={i.fact} time={getTime(i.fact)} />;
        })}
      </FactsListStyled>
      <MyPagination facts={facts} fetchFacts={fetchFacts} />
    </ContainerStyled>
  );
};
