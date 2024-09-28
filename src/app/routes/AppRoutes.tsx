import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import BottomNavBar from "../../ui/components/navbar/BottomNavBar";

export const AppRoutes = () => {
  const excludeNavbarRoutes: string[] = [];
  const location = useLocation();

  return (
      <div className="mb-16">
          {
            (!excludeNavbarRoutes.includes(location.pathname))
            && <BottomNavBar />
          }
        <Routes>
          {/* Coloca tus rutas para las paginas principales */}
          {/* <Route path="path de la ruta" element={<Pagina />} /> */}
          <Route path="/home" element={<></>}/>
          <Route path="/" element={<Navigate to="/home" />} />

        </Routes>
      </div>

  )
}
