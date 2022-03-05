import styled from "styled-components";
import { Avatar, Card, CardContent, Skeleton } from "@mui/material";
import colors from "../../colors";

export const CustomCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 0;
  width: 550px;
  box-shadow: none !important;
  border: none !important;
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

export const Thumb = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
`;
