
export const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <>
    <div className="d-flex">
        <div className="from-control">
        <label htmlFor="male" className="p-2 form-label ">
                        <span className="text-white fs-6 ms-2">Male</span>
                        
                      </label>
                      <input type="checkbox" id="male"  className=" mb-3" 
                      checked={selectedGender=== "male"}
                      onChange={()=>{onCheckBoxChange('male')}}
                      />
        </div>
        <div className="from-control">
        <label htmlFor="female" className="p-2 form-label">
                        <span className="text-white fs-6">Female</span>
                       
                      </label>
                      <input type="checkbox" id="female"  className=" mb-3" 
                      checked={selectedGender=== "female"}
                      onChange={()=>{onCheckBoxChange('female')}}/>
        </div>
    </div>
    </>
  )
}
