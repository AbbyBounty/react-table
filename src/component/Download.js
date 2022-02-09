import { CSVLink } from "react-csv";

const Download = ({ headers, data, name }) => {
    return (
        <div className="mr-3">
            <CSVLink
                headers={headers}
                filename="test.csv"
                data={data}

            >
                <button className="btn btn-success">{name}</button>
            </CSVLink>
        </div>
    )
}


export default Download