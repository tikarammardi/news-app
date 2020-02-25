import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ sources }) => {
  console.log(sources);

  const renderedList = sources.map(source => {
    return (

      <NewsItem
        source={source}

        key={source.id}
      />

    );
  });
  return <div className="">{renderedList}</div>;
};

export default NewsList;
