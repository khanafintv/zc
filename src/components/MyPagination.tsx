import React, { ChangeEvent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import '../style.css';

import styled, { createGlobalStyle } from 'styled-components';
import { IFact } from '../types';

const PaginationStyled = createGlobalStyle`
.pagination {
  display: flex;
  list-style: none;
}

.arrow-next {
  width: 40px;
  height: 40px;
  background-image: url(./img/arrow-right.svg);
  background-size: cover;
}

.page-item  {
  width: 40px;
  height: 40px;
  background-color: #c4c4c4;
  margin-right: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.page-link {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.page-link:hover {
  background: linear-gradient(90deg, #C65252 0%, #5329CA 100%);
  color: white;
}
.active {
  background: linear-gradient(90deg, #C65252 0%, #5329CA 100%);
  color: white;
}
`;

const WrapperPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
`;

const WrapperLimit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectStyled = styled.select`
  min-width: 60px;
  height: 40px;
  padding: 8px;
  border-radius: 0;
  border: none;
  background: #c4c4c4;
  font-family: Yusei Magic;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const TextLimit = styled.p`
  margin-right: 20px;
`;

interface MyPaginationProps {
  facts: IFact;
  fetchFacts: (page: number | undefined, limit: number | undefined) => void;
}

export const MyPagination: React.FC<MyPaginationProps> = ({
  facts,
  fetchFacts,
}) => {
  const [page, setPage]: any = useState(1);
  const [limit, setLimit]: any = useState(10);

  if (facts.from === null) {
    fetchFacts(facts.last_page, limit);
  }

  useEffect(() => {
    fetchFacts(page, limit);
    console.log(facts);
  }, [page, limit]);

  const handlePageClick = (e: any) => {
    setPage(e.selected + 1);
  };

  const handleChange = (e: ChangeEvent<any>) => {
    setLimit(e.target.value);
  };

  return (
    <WrapperPagination>
      <PaginationStyled />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={facts.last_page}
        previousLabel="<"
        breakLabel="..."
        //renderOnZeroPageCount={() => null}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
      <WrapperLimit>
        <TextLimit>Facts on page:</TextLimit>
        <SelectStyled value={limit} onChange={handleChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </SelectStyled>
      </WrapperLimit>
    </WrapperPagination>
  );
};
