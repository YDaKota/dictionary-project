import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}> 
                        <div className="definition">{definition.definition}</div>
                        <div className="example">{definition.example}</div>
                        
                        <Synonyms synonyms={definition.synonyms} />
                        
                    </div>
                );
            })}
        </div>
    );
}

/*
import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition[0].definition}</p>
            <p>{props.meaning.definition[0].definition}</p>
        </div>
        );
}
*/