import { useState, ChangeEvent } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("search")
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const handleSubmit = () => {
 
  }
  return (
      <div>    
          <input placeholder={search} className="search" onChange={(e)=>handleSearchChange(e)}/>
          <input type="submit" value="GO" onClick={handleSubmit} className="gobutton" />
        </div>
    );
};

export default Search;