import React from 'react'

const Form = ({ inputTekst, setInputTekst, setGjøremål }) => {

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

    return(
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <input type="text" className="inputFelt" onChange={inputVerdi} maxLength="50" placeholder="Legg til gjøremål"/>
            <button type="submit" className="btn" onClick={leggTilGjøremål}>Legg til</button>
        </form>
    )
}

export default Form;