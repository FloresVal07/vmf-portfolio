import "./Column.css";

function Column({title, body, id, alt, src}){
    return(
        <div className="top-column" id={id}>
            <h1 className="column-title">{title}</h1>
            <img src={src} alt={alt} className="column-image"/>
            <p className="column-paragraph">{body}</p>
        </div>
    );
}

export default Column;