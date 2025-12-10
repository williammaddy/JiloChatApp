import React, { useState } from "react";

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex items-center gap-6 mt-4">
      {/* Male */}
      <label className={`flex items-center gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}>
        <input
          type="radio"
          name="gender"
          value="male"
          
          className="w-4 h-4 accent-green-600 cursor-pointer"

          checked={selectedGender==="male"}
          onChange={()=>onCheckboxChange("male")}
        />
        <span
          className={`text-sm font-medium ${
            selected === "male" ? "text-green-600" : "text-gray-800"
          }`}
        >
          Male
        </span>
      </label>

      {/* Female */}
      <label className={`flex items-center gap-2 cursor-pointer ${selectedGender==="female" ? "selected":""}`}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender==="female"}
          onChange={()=>onCheckboxChange("female")}
          className="w-4 h-4 accent-pink-500 cursor-pointer"
        />
        <span
          className={`text-sm font-medium ${
            selected === "female" ? "text-pink-400" : "text-gray-800"
          }`}
        >
          Female
        </span>
      </label>
    </div>
  );
};

export default GenderCheckBox;
