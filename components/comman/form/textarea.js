import FormStyle from './form.module.css'

const FormTextarea = ({ name, placeholder, value, onChange, className, labelname }) => {
    return (
        <div className={FormStyle.form_feild}>
              <label>{labelname}</label>
            <textarea className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}
export default FormTextarea;