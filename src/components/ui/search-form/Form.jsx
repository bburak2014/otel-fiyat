import { useState, useCallback } from 'react';
import { GiTripwire } from "react-icons/gi";
import "./search-form.css";

const FormFiedls = [
  { label: "Location", id: "location", type: "select", options: ["Select a location", "Ankara", "Antalya", "İstanbul"] },
  { label: "Start Date", id: "startDate", type: "date" },
  { label: "End Date", id: "endDate", type: "date" },
  { label: "Count of People", id: "count_of_people", type: "number" },
  { label: "Count of Child", id: "count_of_child", type: "number" },
];
const Form = () => {
  const [formData, setFormData] = useState({
    location: '',
    startDate: '',
    endDate: '',
    count_of_people: "1",
    count_of_child: "0"
  });


  const handleInputChange = useCallback((event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2 className='p-4 text-xl'>Filter</h2><hr></hr>
      {
        FormFiedls?.map((item, index) =>
          <div className="my-4" key={index}>
            <label htmlFor={item.id}  className="search-form-label ">{item.label}:</label>
            {
              item?.id === "location" ?
                <select id="location" name="location" value={formData.location} onChange={handleInputChange} className="search-input">
                  {item?.options.map((option, index) => <option key={index} value={index}>{option}</option>
                  )}
                </select> :
                <input autoComplete="off"  type={item.type} id={item.id} name={item.id} value={formData[item.id]} onChange={handleInputChange} className="search-input" />

            }
          </div>
        )
      }

      <div className='flex justify-center '>
        <button type="submit" className="search-button bg-blue-500"><div className='search-button-box'> <GiTripwire /> <span>Search</span> </div></button>
      </div>
    </form>
  );
};

export default Form;
