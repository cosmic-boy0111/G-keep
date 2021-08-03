import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App = () => {

  const [add,setAdd] = useState([])

  const addNote = (note) =>{
    // alert('i am click')
    setAdd((pre)=>{
      return [...pre,note];
    })
    console.log(note);
  }

  const deleteItem = (id) => {
    setAdd((pre)=>{
      pre.filter((val,index)=>{
        return index !== id;
      })
    })
  }

  return <>
      <Header />
      <CreateNote 
        passNote = {addNote}
      />
      { add.map((val,idx) => {
        return <Note 
          key ={idx}
          id = {idx}
          title = {val.title}
          content = {val.content}
          setAdd = {setAdd}
          add = {add}
        />
      })}
      <Footer />
  </>
}

export default App

