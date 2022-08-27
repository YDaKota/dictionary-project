import React from "react";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                return (
                    <li key={index}>{synonym}</li>
                );
            })}
            </ul>
        );
    } else {
        return null;
    }
}

/*
import React from "react";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                return (
                    <span key={index}>{synonym}</span>
                );
            })}
            </div>
        );
    } else {
        return null;
    }
}*/