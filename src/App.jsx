import { useState } from 'react'
import Card from './Components/Card'
import ErrorMessage from './Components/ErrorMessage'
import './Components/Styles.css'
import './App.css'



function App() {
  const [formData, setFormData] = useState({
    GeneroFavorito: '',
    AutorFavorito: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    
    if (!formData.GeneroFavorito.trim() || formData.GeneroFavorito.trim().length < 3 || formData.GeneroFavorito !== formData.GeneroFavorito.trimStart()) {
      tempErrors.GeneroFavorito = 'Por favor chequea que la información sea correcta';
    }
    
    if (formData.AutorFavorito.length < 6) {
      tempErrors.AutorFavorito = 'Por favor chequea que la información sea correcta';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      setIsSubmitted(true);
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="form">
            <h2>Tus Gustos Literarios</h2>
            
            <div className="form-group">
              <label htmlFor="GeneroFavorito">Género Favorito:</label>
              <input
                type="text"
                id="GeneroFavorito"
                name="GeneroFavorito"
                value={formData.GeneroFavorito}
                onChange={handleChange}
                className={errors.GeneroFavorito ? 'error-input' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="AutorFavorito">Autor Favorito:</label>
              <input
                type="text"
                id="AutorFavorito"
                name="AutorFavorito"
                value={formData.AutorFavorito}
                onChange={handleChange}
                className={errors.AutorFavorito ? 'error-input' : ''}
              />
            </div>

            <button type="submit">Enviar</button>
          </form>
          
          {/* Componente de errores separado */}
          {Object.keys(errors).length > 0 && (
            <ErrorMessage errors={errors} />
          )}
        </>
      ) : (
        <Card data={formData} />
      )}
    </div>
  );
}


export default App;