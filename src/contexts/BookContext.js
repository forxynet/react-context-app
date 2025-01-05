import { createContext, useState } from 'react'

export const BookContext = createContext();
export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: 'name of thie wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of eges', id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}
