import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders the Search Bar Title", () => {

  const { getByText } = render(<App />); 

  const label = getByText("Search by name here");

  expect(label).toBeInTheDocument(); 
});

test("renders the Home Button", () => {

  const { getByText } = render(<App />); 

  const label = getByText("Home");

  expect(label).toBeInTheDocument(); 
});