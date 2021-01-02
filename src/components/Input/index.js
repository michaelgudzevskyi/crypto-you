import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import { Field } from 'formik'
import classNames from 'classnames';

import './styles.scss'

const InputForm = ({
    name,
    placeholder,
    error,
    touched,
    disabled,
    label,
    mask,
    component,
    rows,
    values,
    validate,
    className,
    ...rest
}) => {
    const findName = useMemo(() => name.split('.')[name.split('.').length - 1], [name])

    return (
        <div className="input-group">
            <Field
                {...rest}
                placeholder={label}
                name={name}
                id={name}
                component={component && component}
                rows={rows && rows}
                validate={validate}
                disabled={disabled}
                className={classNames("form-input", className)}
            >
                {mask
                    ? ({ field }) => (
                            <InputMask
                                {...field}
                                {...rest}
                                placeholder={label}
                                mask={mask}
                            />
                        )
                    : null}
            </Field>
            <span className={classNames("bar", {"--error": error[findName] && touched[findName]})} />
            {error[findName] && touched[findName] ? (
                <div className={classNames("input-info", {"--error": error[findName] && touched[findName]})}>{error[findName]}</div>
            ) : null}
        </div>
    )
}

InputForm.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.object,
    touched: PropTypes.object,
    values: PropTypes.object,
    label: PropTypes.string,
    mask: PropTypes.string,
    component: PropTypes.string,
    rows: PropTypes.string, 
    className: PropTypes.string, 
    validate: PropTypes.func,
    disabled: PropTypes.bool,
}

export default InputForm


