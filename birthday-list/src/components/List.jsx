import React from "react";

const List = (props) =>{
    const {people} = props ;
    return (
      <div>
        {
            people.map((person)=>{
                const {id, Name, age, image} = person;
                return (

                  <article className="person">
                    <img src={image} alt="" />
                    <div>
                      <h4>{Name}</h4>
                      <p>{age} yeras old</p>
                    </div>
                  </article>
                );
            })
        }

      </div>
    );
}

export default List