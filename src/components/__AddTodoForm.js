export const AddTodoForm = (props) => {
    return (
        <div className="mt-4">
            <form className="d-flex justify-content-between align-items-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add new item..."
                    required
                />
                <button
                    onClick={props.addButton}
                    className="btn btn-primary btn-sm rounded ms-2"
                >
                    Add
                </button>
            </form>
        </div>
    );
};
