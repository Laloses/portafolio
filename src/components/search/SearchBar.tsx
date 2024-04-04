import SearchIcon from "@mui/icons-material/Search";
import InputBase, { type InputBaseProps } from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  placeholder: string;
  widthExpand: number;
}

export default function SearchBar(props: Props) {
  // Misc
  const searchRef = useRef<HTMLInputElement>(null);
  // State
  const [isFocused, setIsFocused] = useState(false);

  // Handlers
  const onMount = useCallback(() => {
    const searchInput = searchRef.current;
    if (searchInput) {
      searchInput.addEventListener("focus", handleFocus);
      searchInput.addEventListener("blur", handleBlur);
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("focus", handleFocus);
        searchInput.removeEventListener("blur", handleBlur);
      }
    };
  }, [searchRef.current]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // Effects
  useEffect(onMount, []);

  // Validated variables

  const wordsPlaceholder = props.placeholder.split(" ");
  const placeholder = isFocused
    ? props.placeholder
    : wordsPlaceholder[0] + " ...";

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        widthExpand={props.widthExpand}
        inputRef={searchRef}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface InputBaseExtendWidthProps extends InputBaseProps {
  widthExpand: number;
}
function InputBaseExtendWidth(props: InputBaseExtendWidthProps) {
  return <InputBase {...props} />;
}

const StyledInputBase = styled(InputBaseExtendWidth)(
  ({ theme, widthExpand }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: widthExpand + "ch",
        },
      },
    },
  })
);
