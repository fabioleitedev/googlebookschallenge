import styled from "styled-components";
import { Card, CardContent, Skeleton } from "@mui/material";
import colors from "../../colors";

export const CustomCard = styled(Card)`
  padding: 10px;
  margin-top: 0;
  width: 600px;
  box-shadow: none;
  padding-bottom: 0px;
`;

export const CustomCardContent = styled(CardContent)``;

export const Separator = styled.hr`
  width: 580px;
  margin-top: 20px;
  height: 1px;
  border: none;
  background-color: ${colors.separatorColor} !important;
`;

export const BookSkeleton = styled(Skeleton)`
  height: 20px;
  margin-bottom: 10px;
`;
