import React from 'react'

interface Props {
  
}

const ForexChat: React.FC<Props> = () => {
  return (
    <div>
    <iframe
      src="https://fxpricing.com/fx-widget/market-currency-rates-widget.php?id=1,2,3,5,14,20"
      width="100%"
      height="290"
      style={{ border: '1px solid #eee' }}
      title="FX Pricing Widget"
    > </iframe>
    
  </div>
  )
}



export default ForexChat
