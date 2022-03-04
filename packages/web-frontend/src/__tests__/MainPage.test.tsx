import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "../pages/MainPage";

it("should have a main page.", () => {
  render(<MainPage />);
  expect(document.querySelector("#main-wrapper")).toBeInTheDocument();
  expect(document.querySelector("#left-wrapper")).toBeInTheDocument();
  expect(document.querySelector("#form-control")).toBeInTheDocument();
  expect(document.querySelector("#star-counter-label")).toBeInTheDocument();
  expect(document.querySelector("#star-counter-select")).toBeInTheDocument();
  expect(document.querySelector("#right-wrapper")).toBeInTheDocument();
  expect(document.querySelector("#filter-wrapper")).toBeInTheDocument();
  expect(document.querySelector("#result-wrapper")).toBeInTheDocument();
});
