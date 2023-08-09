

function Inputfield ({title, titleid, text, handle, value}) {

    return (
        <div>
            <label htmlFor= {titleid}>{title.charAt(0).toUpperCase() + title.slice(1)}
                <input
                        type="text"
                        value={value}
                        id= {titleid}
                        name= {title}
                        placeholder={text}
                        onChange={handle}
                    />
                </label>

        </div>
    );
}

export default Inputfield;

