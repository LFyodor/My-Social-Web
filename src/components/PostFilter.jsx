import React from 'react';
import Search from "./UI/input/Search";
import SelectPost from "./UI/select/SelectPost";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="searchAndSort">
          <Search
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="Search..."          
          />
          <p>Sorting</p>
          <SelectPost
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Without Sorting"
            options={[
              {value: 'title', name: 'By Title'},
            ]}
          />
        </div>
    )
}

export default PostFilter;