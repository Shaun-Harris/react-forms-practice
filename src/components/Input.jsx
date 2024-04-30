function Input({ type, name, required, value, id, formData, setFormData, checked }) {
    function handleChange(e) {
        const { value, type, name, checked } = e.target
        const valToAdd = type === "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name] : valToAdd
        })
    }

    return (<input type={type} name={name} required={required} value={value} id={id} onChange={handleChange} checked={checked}/>)
}

export default Input