import React  from "react";


const getTable=(Cars)=>{
return Cars.map((car)=>{
    const {id,brand,year}=car
    return(
        <tr>
            <td>{id}</td>
            <td>{brand}</td>
            <td>{year}</td>
        </tr>
    );
});
};
function Table(){
    const Cars =[
{id:1, brand:"toyota",year:2010},
{id:2, brand:"mazda",year:2010},
    ];
    return(
    <table>
        <tbody>{getTable(Cars)}</tbody>
        </table>
    );
}
export default Table;
