import { FormEvent, useState } from "react";

const useRecipeSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return { handleSearch, handleChange };
};

export default useRecipeSearch;
