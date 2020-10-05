import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  console.log(sampleData);
  return (
    <div className="container p-0">
      <div className="row sample-container p-4 pl-5">
        <h5 className="mb-4">Sample Data Features and values</h5>
        <table className="table">
          <thead>
            <tr>
              {sampleData["features"].map((feature) => (
                <th scope="col">{Object}</th>
              ))}

              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampleSection;

// import React from "react";
// import "./SampleSection.css";

// const SampleSection = ({sampleData}) => {
//   console.log(sampleData);
//   return (
//     <div className="container p-0">
//       <div className="row sample-container p-4 pl-5">
//         <h5 className="mb-4">Sample Data Features and values</h5>
//         <div className="row d-flex justify-content-start align-items-center">
//           {sampleData &&
//             sampleData["features"].map((feature, index) => (
//               <React.Fragment key={index}>
//                 <span>
//                   <p className="p-2 pl-3 pr-3 feature">
//                     {Object.keys(feature)}
//                   </p>
//                 </span>
//                 <span>
//                   <p className="p-2 pl-3 pr-3 mr-5 feature-value">
//                     {Object.values(feature)}
//                   </p>
//                 </span>
//               </React.Fragment>
//             ))}
//           {sampleData &&
//             sampleData["target"].map((target, index) => (
//               <span>
//                 <h6 className="p-2 pl-3 pr-3 mb-3 target" key={index}>
//                   {Object.keys(target)} : {Object.values(target)}
//                 </h6>
//               </span>
//             ))}
//         </div>
//         <div className="row"></div>
//       </div>
//     </div>
//   );
// };

// export default SampleSection;
