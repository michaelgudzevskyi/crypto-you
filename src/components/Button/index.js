import { memo } from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

const Button = memo(({ type, loading, disabled, className, onClick, children, ...rest }) => (
        <button
            {...rest}
            type={type || 'button'}
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {loading ? (
               <> <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
                </svg> <span>loading...</span> </>
            ) : (
                children
            )}
        </button>
    ))

Button.propTypes = {
    type: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
};

export default Button;