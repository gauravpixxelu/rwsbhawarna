import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BelowBannerSectionWrapper = styled.section`
  background-color: #003e67;
  padding: 15px 0; 
  overflow: hidden; 
  color: #fff;
`;

const SchoolBells = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${marquee} 50s linear infinite;
`;

const SchoolBellsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SchoolBellsListItem = styled.li`
  margin-right: 50px; 
`;

const BelowBannerSection = () => {
  return (
    <BelowBannerSectionWrapper>
      <SchoolBells>
        <SchoolBellsList>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
          <SchoolBellsListItem>School bells are ringing loud and clear, vacation over, school is here</SchoolBellsListItem>
        </SchoolBellsList>
      </SchoolBells>
    </BelowBannerSectionWrapper>
  );
};

export default BelowBannerSection;
