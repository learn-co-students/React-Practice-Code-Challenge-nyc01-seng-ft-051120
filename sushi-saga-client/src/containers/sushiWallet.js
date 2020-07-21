import React from 'react'

const SushiWallet=(props)=>{
    return(
        <div>
        <label>Add Money:</label> <br/><small> type amount!</small><br/>
        <input name='money' min='0' type='text' onChange={props.handleAddMoney}/>
        </div>
    )
}
export default SushiWallet