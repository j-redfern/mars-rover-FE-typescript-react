import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";

describe('App', () => {
    it('renders the title and image', () => {
      render(<App />);

      const title = screen.getByText("Mars Rover");
      const image = screen.getByAltText("robot")

      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });

    it.each`
      screenPlaceholder           | placeholderText               
      ${"minMaxPlaceholder"}      | ${/min,max/i }                
      ${"startPointPlaceholder"}  | ${/x,y/i }                    
      ${"directionPlaceholder"}   | ${/N,S,E or W /i }            
      ${"commandPlaceholder"}     | ${/F,B,L,R/i }                
      `('verifies "$screenPlaceholder" contains "$placeholderText" in the placeholder text', ({ placeholderText}) => {
        render(<App />);
        expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
      })
    })
