import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTime } from '../gettime';

const FactItemStyled = styled.div`
  width: 580px;
  min-height: 104px;
  padding: 18px 20px 18px 20px;
  border: 1px solid #000;
`;

const ItemTextStyled = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const ItemTimeStyled = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.35);
`;

interface FactItemProps {
  fact: string;
}

export const FactItem: React.FC<FactItemProps> = ({ fact }) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setTime(getTime(fact));
  }, []);

  return (
    <FactItemStyled>
      <ItemTextStyled>{fact}</ItemTextStyled>
      <ItemTimeStyled>Can be read in {time} seconds</ItemTimeStyled>
    </FactItemStyled>
  );
};
