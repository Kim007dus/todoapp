import trash from "../assets/trash-duotone.svg";

const Buttons = ({buttontext, toggleTasks, image}) => {
    return (
        <button className="button sort" type="button" onClick={toggleTasks}
        > {buttontext} <img src={image} alt={buttontext} /></button>
    );
};

export default Buttons