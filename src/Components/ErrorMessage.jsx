import React from "react";

function ErrorMessage({ errors }) {
    return (
    <div className="error-container">
        {Object.values(errors).map((error, index) => (
        <div key={index} className="error-message">
            {error}
        </div>
        ))}
    </div>
    );
}

export default ErrorMessage;