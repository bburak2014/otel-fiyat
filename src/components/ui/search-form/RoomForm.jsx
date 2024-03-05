import { useState, useCallback } from 'react';
import "./search-form.css";

const FormFields = [
    { label: "Standart", id: "standart", type: "checkbox" },
    { label: "Luxury", id: "luxury", type: "checkbox" },
    { label: "Royal", id: "royal", type: "checkbox" },
];

const RoomForm = () => {
    const [formCheckData, setFormCheckData] = useState({
        standart: false,
        luxury: false,
        royal: false,
    });

    const handleInputChange = useCallback((event) => {
        const { name, checked } = event.target;
        setFormCheckData((prevFormData) => ({
            ...prevFormData,
            [name]: checked,
        }));
        // Diğer checkbox'ların durumunu güncelle
        if (checked) {
            for (const fieldName in formCheckData) {
                if (fieldName !== name) {
                    setFormCheckData((prevFormData) => ({
                        ...prevFormData,
                        [fieldName]: false,
                    }));
                }
            }
        } else {
            setFormCheckData((prevFormData) => ({
                ...prevFormData,
                [name]: false,
            }));
        }
    }, [formCheckData]);


    return (
        <form className="search-form gap-4 flex flex-col"  >
            <h2 className='px-4 text-xl'>Room Type</h2><hr></hr>
            {
                FormFields?.map((item, index) =>
                    <div className="search-check" key={index}>
                        <label htmlFor={item.id} className="search-form-label">{item.label}:</label>
                        <input
                            type={item.type}
                            id={item.id}
                            name={item.id}
                            checked={formCheckData[item.id]}
                            onChange={handleInputChange}
                            className='search-check-input'
                        />
                    </div>
                )
            }
        </form>
    );
};

export default RoomForm;
