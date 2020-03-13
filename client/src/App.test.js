import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

test("Rendering App without crashing", () => {
  render(<App />);
});

test("Megan", () => {

  const { getByText } = render(<App />); 

  const label = getByText("Megan");

  expect(label).toBeInTheDocument(); 
});

test("renders the Home Button", () => {

  const { getByText } = render(<App />); 

  const label = getByText("Home");

  expect(label).toBeInTheDocument(); 
});