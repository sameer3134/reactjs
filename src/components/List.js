import React from 'react'

const List = () => {
    const names =[{
        id:1,
        name: 'bruce',
        age:30,
        skill : 'react'
    },{
        id:2,
        name: 'bruce',
        age:5,
        skill : 'font'
    },{
        id:3,
        name: 'bru',
        age:3,
        skill : 'css'
    },{
        id:4,
        name: 'ame',
        age:34,
        skill : 'html'
    }]
  return (
    <div>{
        names.map(A => <h2 >he is {A.name} and {A.age}</h2>)
        }</div>
  )
}

export default List


/*  return (
    <div>{
        names.map(A => <Name key={A.id} A={A} />)
        }</div>
  )

do as props command {A}
<h2 >he is {A.name} and {A.age}</h2>
*/