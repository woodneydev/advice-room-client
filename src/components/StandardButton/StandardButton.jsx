/**
 * A versatile button component that can render either a <button> or a <Link>
 * depending on whether an `onClick` handler is provided.
 *
 * @param {string} className - Optional additional classes for custom styling.
 * @param {function} onClick - If provided, renders a <button> and assigns this function as the click handler.
 * @param {React.ReactNode} children - The content to be displayed inside the button or link.
 * @param {string} value - Alternative text to display inside the button or link.
 * @param {string} [type='button'] - The `type` attribute of the <button>. Defaults to 'button'.
 * @param {string} to - The destination for the <Link>. Required when rendering a <Link>.
 * @param {...object} rest - Any additional props to be passed to the <button> or <Link>.
 * @returns {JSX.Element} A button or link component.
 */

import { Link } from "react-router-dom";

const StandardButton = ({className, onClick, children, value, type = 'button', to = "#", ...rest}) => {

    const buttonText = value || children || "Click Me";

    const standardClasses = 'rounded-full bg-skyBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hoverSkyBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

    if (onClick && typeof onClick === 'function') return (
        <button
        className={`${standardClasses} ${className}`}
        onClick={onClick}
        type={type}
        {...rest}
      >
        {buttonText}
      </button>
    )

    return (
        <Link
        className={`${standardClasses} ${className}`}
        to={to}
        {...rest}
      >
        {buttonText}
      </Link>
      
    )
}

export default StandardButton;