import { useEffect, useState } from 'react';
import { FactItem } from '../components/FactItem';
import styled from 'styled-components';
import { MyPagination } from '../components/MyPagination';
import { IAllData, IFact } from '../types';

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
  const [allData, setAllData] = useState<IAllData>({ data: [] });

  const fetchFacts = async (page: number = 1, limit: number = 10) => {
    const response = await fetch(
      `https://catfact.ninja/facts?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    setAllData(data);
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <ContainerStyled>
      <TitleStyled>List of facts</TitleStyled>
      <FactsListStyled>
        {allData.data?.map((i: IFact) => (
          <FactItem key={i.fact} fact={i.fact} />
        ))}
      </FactsListStyled>
      <MyPagination allData={allData} fetchFacts={fetchFacts} />
    </ContainerStyled>
  );
};
