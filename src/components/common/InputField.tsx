type Props = {
    onChange: (str: string) => void;
    placeholder: string;
    name: string;
    value?: string;
}

export const InputField = ({onChange, name, placeholder, value = ''}: Props) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  )
}
