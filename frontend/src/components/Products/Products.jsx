import React from 'react'
import css from "./Products.module.css"
const Products = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div>
        <p>Investment and Insurance Products are:</p>
        
        <ul className={css.list}>
            <li>Not Insured by the FDIC or Any Federal Government Agency</li>
            <li>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</li>
            <li>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</li>
        </ul>

        </div>
        <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
      </div>
    </div>
    
  )
}

export default Products
