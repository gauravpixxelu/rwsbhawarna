import FormStyle from './form.module.css'

const FormInput = ({ type, name, placeholder, value, onChange, className, labelname }) => {
    return (
        <div className={FormStyle.form_feild}>
            <label>{labelname}</label>
            <input type={type} className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}
export default FormInput;