import React from 'react'

function InputBox(props) {
    const value = props.data;
    const setValue = props.setData;

    return (
        <div className="input-Box">
            <textarea 
                style = {
                    {fontSize : '100pt'},
                    {height : '100px'},
                    {width : '350px'}
                }     
                rows="6"     
                cols="10" 
                autoFocus = {true}
                value = {value}
                onChange = {(e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}

export default InputBox
