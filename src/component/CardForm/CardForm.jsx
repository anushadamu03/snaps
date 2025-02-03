// import React, { useState } from "react";
// import "./CardForm.scss";
// import axios from "axios";

// const CardForm = (props) => {
//   const { card_id, fetchCommentArray } = props;

//   const [formData, setFormData] = useState({
//     name: "",
//     comment: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value, 
//     });
//   };

//   const API_URL = import.meta.env.VITE_API_URL;

//   const postCommentApi = async () => {
//     if (!formData.name || !formData.comment) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_URL}/photos/${card_id}/comments`,
//         {
//           id: Date.now().toString(), 
//           name: formData.name,
//           comment: formData.comment,
//           timestamp: new Date().toISOString(),
//         }
//       );
//       const data = await response.data.comments;
//       console.log("comment==####", data);
//       fetchCommentArray();
//       setFormData({ name: "", comment: "" });
//     } catch (err) {
//       console.log("Failed to fetch photos", err);
//     }
//   };

//   return (
//     <div className="card-form-box ">
//       <div className="row ">
//         <div className="card-form-name-box col-12">
//           <div>
//             <label htmlFor="">Name</label>
//           </div>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             className=""
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="card-form-comment-box col-12">
//           <div>
//             <label htmlFor="">Comment</label>
//           </div>
//           <input
//             type="text"
//             id="comment"
//             name="comment"
//             required
//             className=""
//             value={formData.comment}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="card-form-box-button col-12">
//           <button type="button" onClick={postCommentApi}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardForm;


import React, { useState } from "react";
import "./CardForm.scss";
import axios from "axios";

const CardForm = (props) => {
  const { card_id, fetchCommentArray } = props;

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    comment: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error if input is not empty
    setErrors({
      ...errors,
      [name]: value.trim() === "" ? true : false,
    });
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const postCommentApi = async () => {
    let newErrors = {
      name: formData.name.trim() === "",
      comment: formData.comment.trim() === "",
    };

    setErrors(newErrors);

    // If any field is empty, stop submission
    if (newErrors.name || newErrors.comment) return;

    try {
      const response = await axios.post(
        `${API_URL}/photos/${card_id}/comments`,
        {
          id: Date.now().toString(),
          name: formData.name,
          comment: formData.comment,
          timestamp: new Date().toISOString(),
        }
      );
      fetchCommentArray();
      setFormData({ name: "", comment: "" });
      setErrors({ name: false, comment: false });
    } catch (err) {
      console.log("Failed to fetch photos", err);
    }
  };

  return (
    <div className="card-form-box">
      <div className="row">
        {/* Name Input */}
        <div className="card-form-name-box col-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={errors.name ? "error-input" : ""}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">Name is required.</p>}
        </div>

        {/* Comment Input */}
        <div className="card-form-comment-box col-12">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            className={errors.comment ? "error-input" : ""}
            value={formData.comment}
            onChange={handleChange}
          />
          {errors.comment && <p className="error-text">Comment is required.</p>}
        </div>

        {/* Submit Button */}
        <div className="card-form-box-button col-12">
          <button type="button" onClick={postCommentApi}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
