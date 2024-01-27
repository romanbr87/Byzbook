import React from 'react'

const CommentsField = ({commentForm,handleInputChange}) => {
  return (
    <div className=" mb-1 mt-1 d-flex gap-1 flex-column justify-content-center text-center">
    {commentForm?.map((formItem, formIndex) => {
      return (
        <div
          key={formIndex}
          className="d-flex gap-2 align-items-center justify-content-center text-center"
        >
          <label
            style={{ height: `35px` }}
            htmlFor=""
            className=" text-center fs_12 bg-dark radius1  w_30 p-1 text-light"
          >
            {formItem.label}
          </label>
          <input
            type={formItem.input}
            className="form-control w_80"
            placeholder={formItem.placeholder}
            {...(formItem.required ? { required: true } : {})}
            onChange={(e) =>
              handleInputChange(e, `links`, formItem?.name)
            }
            style={{ height: `35px` }}
          />
        </div>
      );
    })}
  </div>
  )
}

export default CommentsField