import { ReusableButton } from '@/ui/components'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <ReusableButton onClick={() => navigate('/')}>Volver a la pantalla principal</ReusableButton>
    </div>
  )
}
