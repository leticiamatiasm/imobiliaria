import React from 'react';
import Table from 'react-bootstrap/Table';

function DatabaseTable(content) {
    const value = content.content.value

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {Object.keys(value[0]).map((attribute) => (
                            <th key={attribute}>{attribute}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {value.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

}
export default DatabaseTable;