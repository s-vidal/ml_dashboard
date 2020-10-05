import React from "react";
import "./SampleSection.css";

const SampleSection = ({sampleData}) => {
  console.log(sampleData);
  return (
    <div className="container p-0">
      <div className="row sample-container p-4 pl-5">
        <h5 className="mb-4">Sample Data Features and Target</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Feature</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {sampleData["features"].map((feature, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{Object.keys(feature)}</td>
                <td>{Object.values(feature)}</td>
              </tr>
            ))}
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
