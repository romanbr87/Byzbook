import React from 'react'

const WorkHours = ({workHoursForm,handleInputChange}) => {
  return (
    <>
    {workHoursForm?.inputs?.map((inputItem, inputIndex) => {
        return (
            <div
            key={inputIndex}
            className="formInput input-group input-group-sm"
          >
            <input
              type={inputItem.input}
              className="form-control"
              {...(inputItem.required ? { required: true } : {})}
              placeholder={inputItem.placeholder}
              onChange={(e) =>
                handleInputChange(
                  e,
                  `workHours`,
                  workHoursForm?.name,
                  inputIndex
                )
              }
            />
          </div>
        );
    })}
    </>
  )
}

export default WorkHours