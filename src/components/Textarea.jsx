function Textarea({ value, formData, setFormData }) {
    function handleChange(e) {
        const { value, name } = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    return (
        <textarea
            name="complaint"
            rows="10"
            placeholder="You can complain here"
            value={value}
            onChange={handleChange}
        ></textarea>
    )
}

export default Textarea