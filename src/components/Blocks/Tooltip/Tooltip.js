import './Tooltip.css';

// shadow:= Boolean

const Tooltip = ({tooltipText, bgClass, textClass, shadow, direction}) => {
    let tooltipTextClass = "tooltiptext z-50 " + bgClass + " " + textClass + " " + direction;

    if(shadow)
        tooltipTextClass = tooltipTextClass + " shadow";

    return (
        <div className="focus:outline-none tooltip">
            <i aria-hidden="true" className="fa fa-info-circle text-yellow-500"/>
            <span className={tooltipTextClass}>{tooltipText}</span>
        </div>
    );
}

Tooltip.defaultProps = {
    tooltipText: 'Placeholder tooltip',
    bgClass: 'bg-white',
    textClass: 'text-white',
    shadow: true,
    direction: 'top'
};

export default Tooltip;