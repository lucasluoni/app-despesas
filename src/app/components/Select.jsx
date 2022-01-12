export default function Select({
  value = 'op1',
  label = 'Descrição do Select',
  onChange = null,
  children: options = [
    { id: 'op1', description: 'Opção 1' },
    { id: 'op2', description: 'Opção 2' },
  ],
}) {
  function handleSelectChange({ currentTarget }) {
    if (onChange) {
      onChange(currentTarget.value)
    }
  }

  return (
    <div className='text-center mb-4'>

      {/* <label className='label flex flex-row justify-center m-4'> */}
      <label className='label flex flex-row justify-center'>
        <span className='label-text dark:text-white'>
          {label}
        </span>
      </label>    

      <select 
        // className='custom-select p-2 select w-64 select-bordered' 
        className='mr-2 border px-1 py-2 bg-light' 
        label={label}
        value={value} 
        onChange={handleSelectChange}
      >
        {options.map(({ id, description }) => {
          return (
            <option key={id} value={id}>
              {description}
            </option>
          )
        })}
      </select>

    </div>
  )
}