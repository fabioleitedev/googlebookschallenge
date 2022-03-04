import { FormControl, InputAdornment, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Filter,
  FilterWrapper,
  LeftWrapper,
  MainWrapper,
  Paginator,
  PaginatorWrapper,
  ResultsWrapper,
  RightContainer,
  StarCounter,
  StarCounterLabel,
} from "./styles";
import { BookService } from "../../services/BookService";
import Books from "../../components/Books";
import { Volume } from "../../model/Volume";

export default function MainPage() {
  const [starCount, setStarCount] = useState(0);
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalOfVolumes, setTotalOfVolumes] = useState(0);

  const loadBooks = async (page: number, query?: string) => {
    const bookService = new BookService();
    const booksFromApi = await bookService.getBooksPerPage(page, query);

    setLoading(true);

    setTimeout(() => {
      setVolumes(booksFromApi.volumes);
      setTotalOfVolumes(booksFromApi.totalOfVolumes);
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    loadBooks(1);
    setStarCount(0);
  }, []);

  useEffect(() => {
    loadBooks(1, search);
  }, [search]);

  const handleStarCount = () => {
    //setStarCount(0);
  };

  const handleSearch = (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <>
      <MainWrapper id="main-wrapper">
        <LeftWrapper id="left-wrapper">
          <FormControl fullWidth id="form-control">
            <StarCounterLabel id="star-counter-label">
              Star Count (1 to 5)
            </StarCounterLabel>
            <StarCounter
              id="star-counter-select"
              value={starCount}
              label=""
              disabled={loading}
              onChange={handleStarCount}
            >
              <MenuItem value={0}>All stars</MenuItem>
              <MenuItem value={1}>Greater than 1 star</MenuItem>
              <MenuItem value={2}>Greater than 2 stars</MenuItem>
              <MenuItem value={3}>Greater than 3 stars</MenuItem>
              <MenuItem value={4}>Greater than 4 stars</MenuItem>
              <MenuItem value={5}>Greater than 5 stars</MenuItem>
            </StarCounter>
          </FormControl>
        </LeftWrapper>
        <RightContainer id="right-wrapper">
          <FilterWrapper id="filter-wrapper">
            <Filter
              id="filter-input"
              placeholder="Start searching..."
              onKeyUp={(e) => handleSearch(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </FilterWrapper>
          <ResultsWrapper id="result-wrapper">
            <Books loading={loading} items={volumes}></Books>
          </ResultsWrapper>
          {!loading && (
            <PaginatorWrapper spacing={2}>
              <Paginator
                count={totalOfVolumes}
                variant="outlined"
                shape="rounded"
              />
            </PaginatorWrapper>
          )}
        </RightContainer>
      </MainWrapper>
    </>
  );
}
