import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useToggleTheme() {
  return useContext(ThemeContext).toggleTheme;
}
