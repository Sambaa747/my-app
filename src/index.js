import react from 'react'
import reactDom from 'react-dom'
import './index.css'
import { data } from './books'
import ArBook from './Book'

function Booklist() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <ArBook key={book.id} nom={book}></ArBook>
      })}
    </section>
  )
}

reactDom.render(<Booklist />, document.getElementById('root'))
