import React from 'react'

function Alerts(props) {
    return (
        <div style={{height: '60px'}}>
             {props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>Success : </strong> {props.alert.msg}
            </div>}
         </div>
        
    )
}

export default Alerts
