import React from 'react';

const Note = (props) => {
    let markup = (!props.isEditMode) ? (<p>{props.initialValue}</p>) : (<textarea maxLength="100" rows="3" cols="4" defaultValue={props.initialValue} name={props.name} onChange={props.onChange} />);
    return (
        <div className="row brdr-btm">
            <label htmlFor="note">{props.label}</label>
            <div className="value-place-holder">
                {markup}
                {!props.isEditMode ? "" : <div className="char-left" style={{ display: props.showChars }}>character's left: <span className="bold"> {props.charLeft} </span></div>}
            </div>
        </div>
    );
};

export default Note;