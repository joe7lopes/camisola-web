import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, InputGroup } from 'react-bootstrap';
import { getSettingsCategories } from '../../../../store/selectors';

interface IProps {
    selectedCategories: string[],
    onChange: (categories: string[]) => void
}

const ProductCategorySelector = ({ selectedCategories, onChange }: IProps) => {
  const availableCategories = useSelector(getSettingsCategories);

  const mergedCategories = availableCategories.map((pc) => ({
    name: pc.name,
    checked: selectedCategories.includes(pc.name),
  }));

  const [categories, setCategories] = useState(mergedCategories);


  const handleOnCategoryChanged = (index:any) => {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
    const checkedCategories = newCategories
      .filter((c) => c.checked)
      .map((c) => c.name);
    onChange(checkedCategories);
  };

  return (

        <div>
            {categories.map((c, i) => (
                <div key={c.name}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox
                                checked={c.checked}
                                onChange={() => handleOnCategoryChanged(i)}/>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" value={c.name} readOnly/>
                    </InputGroup>
                </div>
            ))}
        </div>
  );
};

export default ProductCategorySelector;
