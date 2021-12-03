import React from 'react'

const Book = (props) => {
  const { img, title } = props.nom
  const clickHandler = () => {
    alert('Hello world')
  }
  const complexExample = (title) => {
    console.log(title)
  }
  return (
    <article
      className='book'
      onMouseOver={(title) => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{title}</h3>
      <button type='button' onClick={clickHandler}>
        Example button
      </button>
      <button type='button' onClick={() => complexExample(title)}>
        Complex example
      </button>
    </article>
  )
}

export default Book
