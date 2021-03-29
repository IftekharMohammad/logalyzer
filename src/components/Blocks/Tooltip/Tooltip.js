import './Tooltip.css';

const Tooltip = ({tooltipText}) => {
    return (
        <div className="focus:outline-none tooltip">
            <i aria-hidden="true" className="fa fa-info-circle text-yellow-500"/>
            <span className="tooltiptext">{tooltipText}</span>
        </div>
    );
}

export default Tooltip;