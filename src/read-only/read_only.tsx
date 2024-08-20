// // ES6 Way
import React from "react"

interface AdminPanelProps {
    metrics:string[],
    data:string
}

const AdminPanel:React.FC<Readonly<AdminPanelProps>> = (props) => {
     return (
         <div className="AdminPanel"> 
          {props.metrics.map(it => <span key={it}>{it}</span>)}
          <div>{props.data}</div>
         </div>
     )
}

export default AdminPanel



// //ES5 or tradional way
// import React from "react";

// interface AdminPanelProps {
//     metrics: string[];
//     data: string;
// }

// function AdminPanel(props:Readonly<AdminPanelProps>) {

//     return (
//         <div className="AdminPanel">
//             {props.metrics.map((it, index) => <span key={index}>{it}</span>)}
//             <div>{props.data}</div>
//         </div>
//     );
// }

// export default AdminPanel;
