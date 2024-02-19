// Bootstrap
import Spinner from 'react-bootstrap/Spinner'

// CSS
import './loading-component.css'

const LoadingComponent: React.FC = () => {
  return (
    <div className="loading-component">
      <p>Loading...</p>
      <Spinner animation="border" variant="primary" size="sm" />
    </div>
  )
}

export default LoadingComponent
