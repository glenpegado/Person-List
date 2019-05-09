import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



const Person = ({img, name, job, children}) => {
    const url = `https://randomuser.me/api/portraits/men/${img}.jpg`
    return(
        <article className="person">
            < img src = {url} alt ="person" />  
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}


const PersonList = () =>{
    return(
        <section className="person-list">
            <Person img="34" name="john" job="developer"/>
            <Person img = "23" name = "glen" job = "dancer">
            < p > Lorem ipsum dolor sit amet consectetur, adipisicing elit.Esse architecto ipsa, officia voluptatem eos voluptatibus temporibus praesentium aut qui iste, quod est enim quas maxime vel totam dolor neque ut! </p>
            </Person>
            < Person img = "42" name = "bob" job = "athelete" />

        </section>
    )
}

ReactDOM.render(<PersonList/>,document.getElementById('root') )