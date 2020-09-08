import React, { useState } from 'react'
import './addTask.css'

const AddTodo = (props) => {

    const [gjøremål, setGjøremål] = useState([])
    const [inputTekst, setInputTekst] = useState([])

    const inputVerdi = (e) => {
        const inputVerdi = { name: e.target.value, status: false }
        setInputTekst(prevstate => [...prevstate, inputVerdi])
    }

    const leggTilGjøremål = () => {
        const inp = document.querySelector('.inputFelt');
        if(inp.value.length >= 5) {
            const indx = inputTekst.length - 1; 
            const inpTxt = inputTekst[indx];
            setGjøremål(prevArray => [...prevArray, inpTxt])
        } else {
            alert('Gjøremål må inneholde mer enn 4 tegn.')
        }
    }

    const onSubmitHandler = (e) => {
        document.querySelector('.inputFelt').value = '';
        e.preventDefault();
        return false
    }

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
        <div className="todoBody">
            <h2>Todo liste - {props.forNavn} {props.etterNavn}</h2>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <input type="text" className="inputFelt" onChange={(e) => inputVerdi(e)} maxLength="50" placeholder="Legg til gjøremål"/>
                <button type="submit" className="btn" onClick={() => leggTilGjøremål()}>Legg til</button>
            </form>
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

export default AddTodo;