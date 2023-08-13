import { useState } from 'react';
import { useSearhStr } from '../lib/useSearchStr';
import CustomRadio from './customradio';
const SerachForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useSearhStr();
  //1.mounts
  //2.rerender
  //2.5 Logic before next rerender.
  //3.unmounts

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOption == 'shows'}
          onChange={onRadioChange}
        />
        <CustomRadio
          label="Actors"
          name="search-option"
          value="shows"
          checked={searchOption == 'shows'}
          onChange={onRadioChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SerachForm;
