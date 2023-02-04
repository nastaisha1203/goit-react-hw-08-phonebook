import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const handleFilter = evt => dispatch(changeFilter(evt.target.value));
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={handleFilter} />
    </Label>
  );
};
