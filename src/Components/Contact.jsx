import React from 'react'

function Contact(props) {
    return (
        <>
            <div className="container my-3" style={{color:props.mode=="dark"?"white":"black", backgroundColor:props.mode=="dark"?"#6c757d":"white",borderRadius:'10px', padding:'10px'}}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Sender's Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="sender@example.com" />
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Receiver's Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="receiver@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}

export default Contact
