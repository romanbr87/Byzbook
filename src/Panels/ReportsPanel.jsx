import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { fetchData } from "../api";
import useFetch from "../hooks/useFetch";
import { apiRouteList } from "../utils/api-routes";
import {BsTrash3Fill} from 'react-icons/bs'
export default function ReportsPanel(props) {

    const {data} = useFetch (`${apiRouteList.report}reports`);
    const [list, setList] = useState ([]);

    const delReport = (obj) => {
        var res = window.confirm ("האם ברצונך למחוק דיווח על העסק " +  
        obj.gsx$refId.gsx$name + "?")

        if (!res) return;
                
        fetchData(`${apiRouteList.report}deletereport`, 'put', { data: obj._id })
        .then (e=> {
            var arr = [...list];
            arr = arr.filter (e=> e._id !==  obj._id);
            setList(arr);
            alert ("הדיווח נמחק");
        })
        .catch (e=> {
            alert ("לא ניתן למחוק את הדיווח");
        }) 
    }

 
useEffect(()=>{

    console.log (data);


},[data])
    useEffect (()=>{
        if (data) {
            setList(data?.reports);
        }
    }, [data])

    return (
    <React.Fragment>
        <div className={props.className} style={props.style}>
            <div className="table-responsive">
            <table className="table table-bordered" style={{backgroundColor: "white"}}>
            <caption style={{backgroundColor: "white", border: "1px solid #ddd"}}>
                { <h3 className="title text-center">{list.length} דיווחים</h3>}
            </caption>
            <thead>
                <tr>
                <th style={{width: "1px"}}>מחיקה</th>
                { (1==2) && <th className="text-right" style={{width: "60px"}}>#</th>}
                <th className="text-right" style={{width: "30%"}}>שם עסק</th>
                <th className="text-right">דיווח</th>
                </tr>
            </thead>
            <tbody>
             { list?.map ((item, i) => 
             <tr key={i}>
                <th className="text-center">            
                    <BsTrash3Fill
                    size={20}
                    onClick={() => delReport(item)}
                    style={{
                      fontSize: "20px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  />
                </th>
                { (1==2) && <td>{i+1}</td> }
                <td> 
                    <a href={"/page/" + item.gsx$refId.gsx$link}>
                        {item.gsx$refId.gsx$name}
                    </a>
                </td>
                <td>{item.gsx$desc}</td>
             </tr>
             )}
            </tbody>
            </table>
            </div>
            </div>
    </React.Fragment>
    )
}