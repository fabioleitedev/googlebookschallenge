import { Pagination, Select, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import colors from "../../colors";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: calc(50% - 600px);
  background-color: ${colors.bodyBackgroundColor};
  padding: 10px;
`;

export const LeftWrapper = styled.div`
  background-color: ${colors.starCounterWrapperBackgroundColor};
  display: flex;
  width: 600px;
  height: 800px;
  margin-right: 20px;
`;

export const StarCounterLabel = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 50%;
`;

export const StarCounter = styled(Select)`
  background-color: ${colors.starCounterBackgroundColor};
`;

export const RightContainer = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  background-color: ${colors.RightContainerBackgroundColor};
  border-radius: 5px;
`;

export const FilterWrapper = styled.div`
  background-color: ${colors.filterWrapperBackgroundColor};
  display: flex;
  height: 56px;
`;

export const Filter = styled(TextField)`
  width: 100%;
  background-color: ${colors.filterBackgroundColor};
  border: none;
  & .MuiInputBase-root {
    height: 56px !important;
    padding: 10px;
  }
  & .MuiInput-root::before {
    border-bottom: 1px solid ${colors.separatorColor} !important;
  }
  & MuiInputAdornment-root {
    color: ${colors.separatorColor};
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.resultsWrapperBackgroundColor};
  min-height: 650px;
  box-shadow: none;
`;

export const PaginatorWrapper = styled(Stack)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Paginator = styled(Pagination)``;
