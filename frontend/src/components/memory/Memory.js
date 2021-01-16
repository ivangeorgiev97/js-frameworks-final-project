const Memory = (props) => {
    const description = props.description;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {description &&
                    <p className="card-text">{props.description}</p>
                    }
                    <button type="button" className="btn btn-danger remove-card">Изтрий</button>
                </div>
            </div>
        </>
    );
}

export default Memory;
