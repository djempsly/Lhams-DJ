import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí puedes enviar el error a un servicio como Sentry, por ejemplo
    console.error("Error capturado:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>¡Ups! Algo salió mal. Por favor, intenta más tarde.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
