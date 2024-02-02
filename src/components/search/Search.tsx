
import * as React from 'react';
import SearchStyle from '../search/styles/Search.style';
import SearchIconWrapper from '../search/styles/SearchIconWrapper.style';
import StyledInputBase from './styles/StyledInputBase.style';

export default function Search() {
  return (
        <SearchStyle>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </SearchStyle>
  );
}
