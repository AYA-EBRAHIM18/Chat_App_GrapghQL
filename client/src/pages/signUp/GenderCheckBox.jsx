
export const GenderCheckBox = () => {
  return (
    <>
    <div className="d-flex">
        <div className="from-control">
        <label htmlFor="male" className="p-2 form-label ">
                        <span className="text-white fs-6 ms-2">Male</span>
                        
                      </label>
                      <input type="checkbox" id="male"  className=" mb-3" />
        </div>
        <div className="from-control">
        <label htmlFor="female" className="p-2 form-label">
                        <span className="text-white fs-6">Female</span>
                       
                      </label>
                      <input type="checkbox" id="female"  className=" mb-3" />
        </div>
    </div>
    </>
  )
}
