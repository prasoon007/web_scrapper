import React, { useState } from 'react';
import axios from 'axios';


const User = () => {
    const [csv, setNewCsv] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('csv', csv);
        const config = {
            headers: {
                'Accept': '*/*'
            }
        };

        axios.post('http://localhost:5000/csv_uploader', formData, config)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleCsv = (e) => {
        setNewCsv(e.target.files);
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="file"
                name="csv"
                onChange={handleCsv}
            />
            {console.log(csv)}
            <button
                type="submit"
            >Upload Csv</button>
        </form>
    );
}

export default User;