'use client'

import React from 'react'
import Select, {
  type Props as SelectProps,
  type ActionMeta,
  type SingleValue,
  type MultiValue,
} from 'react-select'
// import { Typography } from '../../Typography'

export interface ISelectField<OptionType>
  extends Omit<SelectProps<OptionType>, 'onChange' | 'value'> {
  placeholder?: string
  value?: SingleValue<OptionType> | null
  className?: string
  label?: string
  error?: string
  /** pass any icon ReactNode */
  icon?: React.ReactNode
  /** position of the icon */
  iconPosition?: 'left' | 'right'
  onChange?: (value: SingleValue<OptionType> | null, actionMeta: ActionMeta<OptionType>) => void
}

export const FilterSelect = <OptionType,>({
  placeholder,
  className,
  error,
  value,
  onChange,
  label,
  icon,
  iconPosition = 'right',
  ...rest
}: ISelectField<OptionType>): React.ReactElement => {
  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ): void => {
    if (onChange) {
      onChange(newValue as SingleValue<OptionType>, actionMeta)
    }
  }

  const isError = !!error

  return (
    <div className={`flex flex-col gap-y-1.5 w-full ${className}`}>
      {label && <label className="text-sm text-start text-secondary-500">{label}</label>}

      <div
        className={`relative w-full h-[52px] flex items-center rounded-[57px] shadow-one px-4
          ${isError ? 'border border-red-500' : ''}`}
      >
        {/* Left icon */}
        {icon && iconPosition === 'left' && <span className="text-secondary-500 mr-3">{icon}</span>}

        <Select
          placeholder={placeholder}
          className="flex-1"
          value={value}
          onChange={handleChange}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (base) => ({
              ...base,
              minHeight: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '100px',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }),
            valueContainer: (base) => ({
              ...base,
              padding: 0,
              height: '100%',
            }),
            singleValue: (base) => ({
              ...base,
              color: '#6B7280', // text-secondary-500 equivalent
              fontSize: '16px',
              margin: 0,
            }),
            placeholder: (base) => ({
              ...base,
              color: '#6B7280', // placeholder:text-secondary-500 equivalent
              fontSize: '16px',
              margin: 0,
            }),
            input: (base) => ({
              ...base,
              margin: 0,
              padding: 0,
              color: '#6B7280',
            }),
            menu: (base) => ({
              ...base,
              zIndex: 9999,
              borderRadius: '20px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #E5E7EB',
              marginTop: '8px',
              overflow: 'hidden',
            }),
            menuList: (base) => ({
              ...base,
              maxHeight: '300px',
              padding: '8px',
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused
                ? '#F3F4F6'
                : state.isSelected
                ? '#339dac'
                : '#ffffff',
              color: state.isSelected ? '#ffffff' : '#374151',
              padding: '12px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: state.isSelected ? 500 : 400,
              borderRadius: '8px',
              transition: 'all 0.2s',
              '&:active': {
                backgroundColor: state.isSelected ? '#339dac' : '#E5E7EB',
              },
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: '#339dac',
              primary75: '#339dac',
              primary50: '#e6f3f5',
              primary25: '#b0d9df',
            },
          })}
          {...rest}
        />

        {/* Right icon */}
        {icon && iconPosition === 'right' && (
          <span className="text-secondary-500 ml-3">{icon}</span>
        )}
      </div>

      {isError && <p className="text-red-500 text-[13px] mt-2">{error}</p>}
    </div>
  )
}
