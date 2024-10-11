import logo from "@/assets/logo.png";

export const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="w-40 h-auto" />
    </div>
  );
};
