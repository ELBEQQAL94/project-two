import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <div
      style={{
        fontFamily: "Righteous",
        textTransform: "uppercase",
        background: props.bck,
        color: props.color,
        fontSize: props.size,
        padding: "15px",
        display: "inline-block",
        ...props.add
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = (snapshot) => {
   const data = [];
   snapshot.forEach((childSnapshot) => {
       data.push({
         ...childSnapshot.val(),
         id : childSnapshot.key
       });
   });
   // That's it, Coool! isn't
   return data;
}

export const reverseArray = (actualArray) => {
   let reversedArray = [];
   for(let i = actualArray.length - 1; i >= 0; i--) {
        reversedArray.push(actualArray[i]);
   }
   return reversedArray;
}

export const validate = (element) => {
    let error = [true, ''];
     if(element.validation.email) {
       const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(element.value);
       const message =  `${!isValid ? 'Must be a valid email !' : ''}`;
       error = !isValid ? [false , message] : error;
     }
    if(element.validation.required) {
      const isValid = element.value.trim() !== '';
      const message =  `${!isValid ? 'This field is required' : ''}`;
      error = !isValid ? [false , message] : error;
    }

    return error;
}