"use client"
import React, { useState } from 'react';
import './DataTable.css';
import data from '../../Data/data'; // Ensure this path is correct based on your project structure

const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 20;

    // Function to fill missing fields with an empty string
    const fillMissingFields = (row) => {
        const keys = Object.keys(data[0]);
        keys.forEach((key) => {
            if (!row.hasOwnProperty(key)) {
                row[key] = '';
            }
        });
        return row;
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentData = data.slice(startIndex, endIndex).map(fillMissingFields);

    return (
        <div>
            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, i) => (
                                    <td key={i}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                {currentPage > 1 && <button onClick={handlePrevious}>Previous</button>}
                {endIndex < data.length && <button onClick={handleNext}>Next</button>}
            </div>
        </div>
    );
};

export default DataTable;