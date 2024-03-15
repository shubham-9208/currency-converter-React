import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCureencyChange,
    currencyOption=[],
    selectedCurrency="usd",
    amountDiasabled=false,
    currencyDisables=false,
    className="",
}) {
 
const id=useId() // for unike id genration
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className='w-1-2'>
                <label htmlFor={id} className=' text-black/40 mb-2 inline-block'>{label}</label>
                <input type="number"
                className=' outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled={amountDiasabled}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
                id={id} ///for connection between  label and input field
                />
    
            </div>
            <div className=' w-1/2 flex flex-wrap justify-end '>
                <p className=' text-end text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                className=' outline-none cursor-pointer rounded-lg px-1 py-1 bg-gray-100'
                value={selectedCurrency}
                onChange={(e) =>  onCureencyChange && onCureencyChange(e.target.value)}
                disabled={currencyDisables}
                >
                    {currencyOption.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
    
        </div>
      )
    }
    
    export default InputBox


