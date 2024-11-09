import React from 'react'
import data from './img/data'
import CategoryCard from './CategoryCard'


function Category() {
  return (
    <div style={{
      position: 'relative',
      width: '97%',
      margin: "-20rem auto 0 auto",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: ' center',
      background: 'transparent'


    }}>
      {data.map((item) => (
        <CategoryCard title={item.title} imageLink={item.imageLink} />
      ))}
    </div>
  )
}

export default Category
