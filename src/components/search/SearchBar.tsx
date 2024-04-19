import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';
import type { SxProps } from '@mui/material/styles';
import { alpha, styled, useTheme } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface Props {
  placeholder: string;
  widthExpand: number;
  /** Optional handler to perform additional behaviours on parent component */
  onFocusChange?: (isFocused: boolean) => void;
}

export default function SearchBar(props: Props) {
  // Misc
  const searchRef = useRef<HTMLInputElement>(null);
  // State
  const [isFocused, setIsFocused] = useState(false);

  // Handlers
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: https://github.com/biomejs/biome/issues/2149
  const setListener = useCallback(() => {
    const searchInput = searchRef.current;
    if (searchInput) {
      searchInput.addEventListener('focus', handleFocus);
      searchInput.addEventListener('blur', handleBlur);
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener('focus', handleFocus);
        searchInput.removeEventListener('blur', handleBlur);
      }
    };
  }, [handleBlur, handleFocus, searchRef.current]);

  const notifyParent = useCallback(() => {
    if (props.onFocusChange) {
      props.onFocusChange(isFocused);
    }
  }, [isFocused, props.onFocusChange]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: https://github.com/biomejs/biome/issues/2149
  useEffect(setListener, [searchRef.current]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: https://github.com/biomejs/biome/issues/2149
  useEffect(notifyParent, [isFocused]);

  return (
    <Search focused={isFocused}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        widthExpand={props.widthExpand}
        inputRef={searchRef}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

interface SearchProps extends PropsWithChildren {
  focused: boolean;
}
function Search(props: SearchProps) {
  // State
  const theme = useTheme();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const style: SxProps = useMemo(
    () => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        transition: theme.transitions.create(['width']),
        width: 'auto',
        '&.open': {
          width: '100%',
        },
      },
    }),
    [props.focused, theme]
  );

  return (
    <Box sx={style} className={props.focused ? 'open' : ''}>
      {props.children}
    </Box>
  );
}

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

interface InputBaseExtendWidthProps extends InputBaseProps {
  widthExpand: number;
}

function InputBaseExtendWidth(props: InputBaseExtendWidthProps) {
  return <InputBase {...props} />;
}

const StyledInputBase = styled(InputBaseExtendWidth)(
  ({ theme, widthExpand }) =>
    ({
      color: 'inherit',
      width: '100%',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width', { duration: '0.5s' }),
        [theme.breakpoints.up('xs')]: {
          width: 0,
          '&:focus': {
            width: '100%',
          },
        },
        [theme.breakpoints.up('md')]: {
          width: '12ch',
          '&:focus': {
            width: `${widthExpand}ch`,
          },
        },
      },
    }) satisfies SxProps
);
