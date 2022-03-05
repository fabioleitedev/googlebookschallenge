import { FormControl, InputAdornment, MenuItem, Snackbar } from "@mui/material";
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
import { Volume } from "../../../../shared/model/Volume";
import { BookServiceResponse } from "../../../../shared/model/BookServiceResponse";

export default function MainPage() {
  const [starCount, setStarCount] = useState(0);
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(false);
  const [totalOfVolumes, setTotalOfVolumes] = useState(0);
  const [showError, setShowError] = useState(false);
  const [page, setPage] = useState(1);

  const loadBooks = async () => {
    if (search.trim().length === 0) {
      setVolumes([]);
      setShowPagination(false);
      return;
    }

    setLoading(true);
    setShowPagination(false);

    const bookService = new BookService();
    let books: BookServiceResponse;

    if (starCount === 0) {
      books = await bookService.getBooksPerPage(page, search);
    } else {
      books = await bookService.getBooksPerRating(page, search, starCount);
    }

    if (!books.success) {
      setShowError(true);
      setSearch("");
      setStarCount(0);
      setLoading(false);
      return;
    }

    setVolumes([]);

    if (books.data?.volumes.length === 0) {
      setLoading(false);
      return;
    }

    setVolumes(books.data?.volumes);
    setTotalOfVolumes(books.data?.totalOfVolumes);
    setShowPagination(true);
    setLoading(false);
  };

  useEffect(() => {
    loadBooks();
  }, [starCount, search, page]);

  const handleStarCount = (e: any) => {
    setPage(1);
    setStarCount(e.target.value);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChanging = async (e: any, value: number) => {
    setPage(value);
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
              onChange={handleSearch}
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
          {showPagination && (
            <PaginatorWrapper spacing={2}>
              <Paginator
                count={totalOfVolumes}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={handlePageChanging}
              />
            </PaginatorWrapper>
          )}
        </RightContainer>
      </MainWrapper>
      <Snackbar
        open={showError}
        autoHideDuration={4000}
        onClose={() => setShowError(false)}
        message="Oops! Something went wrong here. Try again later."
      />
    </>
  );
}
