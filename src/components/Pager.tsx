import React, { useState, useEffect }  from 'react';
import { Link } from "gatsby-plugin-intl"
import tw from 'twin.macro';
const PaginationButton = tw(Link)`text-center shadow-md rounded-md  outline-none duration-200 p-3
hover:(cursor-pointer bg-white bg-opacity-50)`;
const DisabledButton = tw(PaginationButton)`
  hover:(cursor-default bg-gray-900 bg-opacity-30) bg-gray-900 bg-opacity-30 pointer-events-none
`
const Pager: React.FC = (props) => {
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber } = props.pageContext;
  const pageList =[
    {id:1, slug:"/mdblog"}
  ];
  function generateSlugs()
  {
    for(var i = 0; i< numberOfPages; i++)
    {
      if(i != 0)
      pageList[i] = {id:i + 1, slug:"/mdblog/" + (i + 1)};
    }
  }
  generateSlugs();
  return (
    <div className="mb-5">
      {previousPagePath != "" ?
        <PaginationButton to={previousPagePath}>PREVIOUS</PaginationButton> : <div></div>
      }
      {
        pageList.map(s => 
          s.id == humanPageNumber ? 
          <DisabledButton key={s.id} to="">{s.id}</DisabledButton> : 
          <PaginationButton key={s.id} to={s.slug}>{s.id}</PaginationButton>
        )
      }
      {nextPagePath != "" ?
        <PaginationButton to={nextPagePath}>NEXT</PaginationButton> : <div></div>
      }
    </div>
  )
}
export default Pager;
