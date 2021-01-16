const Memory = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <button type="button" className="btn btn-danger remove-card">Изтрий</button>
                </div>
            </div>
        </>
    );
}

export default Memory;
