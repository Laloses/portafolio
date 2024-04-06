import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useToogleTheme() {
  return useContext(ThemeContext).toggleTheme;
}
