import React from 'react'

const TodoList = ({ gjøremål, setGjøremål }) => {

    const slettGjøremål = (index) => {
        gjøremål.splice(index, 1)
        setGjøremål(prevState => [...prevState])
    }

    const fullførGjøremål = (index) => {
        const nyVerdi = [...gjøremål]
        nyVerdi[index] = {name: gjøremål[index].name, status: !gjøremål[index].status}
        setGjøremål(nyVerdi)
        console.log(gjøremål)
    }
    
    return(
        <div>
            {
                gjøremål ? gjøremål.map((oppgave, index) => {
                return(
                    <div className={!gjøremål[index].status ? "oppgave" : "fullførtOppgave"} key={index}>
                        <p><li>{oppgave.name}</li></p>
                        <div>
                            <button type="button" className="slettBtn" onClick={() => slettGjøremål(index)}>Slett</button>
                            <button type="button" className="btn" onClick={() => fullførGjøremål(index)}>Ferdig</button>
                        </div>
                    </div>
                )
                }) : null
            }
        </div>
    )
}

export default TodoList;