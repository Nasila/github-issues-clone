import React from 'react';


const IssuesList = ({ data }) => {

console.log("Datas:", data)
    return(
        <ul className="list-group mb-4">
            {data.map((item,i) => (
                <li key={i} className="list-group-item">
                    <p>{item.title}</p>
                    <p>#{item.id} opened by {item.username}</p>
                </li>
            ))}
        </ul>
    );

}

export default IssuesList;
