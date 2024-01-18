import React from 'react'

function Alert({ onClose }) {
  return (
    <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            Enable <strong>Dark Mode</strong> to access this feature.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    </>
  )
}

export default Alert
