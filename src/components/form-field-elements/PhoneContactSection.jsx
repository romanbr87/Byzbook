import React from 'react'

const PhoneContactSection = ({handleInputChange,contactForm}) => {
  return (
    <div className="row gap-1 p-1">
    {contactForm?.map((formItem, formIndex) => {
      return (
        <div
          key={formIndex}
          className={
            formItem.input === `email`
              ? `w_100 gap-1`
              : `w_50 gap-1`
          }
        >
          <label
            style={{ height: `30px` }}
            className="bgc1 text-light fs_15 p-2 w-100 radius1"
          >
            {formItem.label}
          </label>
          <input
            style={{ height: `40px` }}
            type={formItem.type}
            onChange={(e) =>
              handleInputChange(
                e,
                `contact`,
                formItem.name,
                formIndex
              )
            }
            placeholder={formItem.placeholder}
            className="form-control fs_12 fw-bold"
            {...(formItem.required ? { required: true } : {})}
          />
        </div>
      );
    })}
  </div>
  )
}

export default PhoneContactSection