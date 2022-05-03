import {Fragment} from 'react';

import classes from './Input.module.css'

const Input = (props: any) => {
    return(
      <Fragment>
          <label htmlFor={props.id}>{props.label}</label>
          <br/>
          <input
              className={`${classes.input} ${!props.isValid ? classes.invalid : ''}`}
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
          />
          <br/>
      </Fragment>
    );
}

export default Input;
