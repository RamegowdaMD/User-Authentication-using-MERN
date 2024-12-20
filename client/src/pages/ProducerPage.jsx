// import React, { useState } from 'react';
// import '../css/ProducerPage.css';
// import NavForAll from '../components/NavForAll';

// const ProducerPage = () => {
//   const [producerInfo, setProducerInfo] = useState({
//     businessName: '',
//     assets: '',
//     kycInfo: '',
//     requestedAmount: '',
//     reasonForLoan: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProducerInfo({ ...producerInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Loan request submitted', producerInfo);
//   };

//   return (
//     <>
//     <NavForAll/>
//     <div className="producer-page">
//       <h1>Producer Loan Request</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Business Name</label>
//           <input
//             type="text"
//             name="businessName"
//             value={producerInfo.businessName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Assets</label>
//           <input
//             type="text"
//             name="assets"
//             value={producerInfo.assets}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>KYC Information</label>
//           <textarea
//             name="kycInfo"
//             value={producerInfo.kycInfo}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Requested Loan Amount</label>
//           <input
//             type="number"
//             name="requestedAmount"
//             value={producerInfo.requestedAmount}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Reason for Loan</label>
//           <textarea
//             name="reasonForLoan"
//             value={producerInfo.reasonForLoan}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit Loan Request</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default ProducerPage;

import React, { useState } from 'react';
import '../css/ProducerPage.css';
import NavForAll from '../components/NavForAll';

const ProducerPage = () => {
  const [producerInfo, setProducerInfo] = useState({
    businessName: '',
    assets: '',
    kycInfo: '',
    requestedAmount: '',
    reasonForLoan: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducerInfo({ ...producerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    console.log('Loan request submitted', producerInfo);

    setSuccessMessage('Loan request submitted successfully!');
    setProducerInfo({
      businessName: '',
      assets: '',
      kycInfo: '',
      requestedAmount: '',
      reasonForLoan: '',
    });
  };

  return (
    <>
      <NavForAll />
      <div className="producer-page">
        <h1>Producer Loan Request</h1>

        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={producerInfo.businessName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Assets</label>
            <input
              type="text"
              name="assets"
              value={producerInfo.assets}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>KYC Information</label>
            <textarea
              name="kycInfo"
              value={producerInfo.kycInfo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Requested Loan Amount</label>
            <input
              type="number"
              name="requestedAmount"
              value={producerInfo.requestedAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason for Loan</label>
            <textarea
              name="reasonForLoan"
              value={producerInfo.reasonForLoan}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit Loan Request</button>
        </form>
      </div>
    </>
  );
};

export default ProducerPage;

