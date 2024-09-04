'use client';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function SwitchClient() {
  const { theme, setTheme } = useTheme();

  // Inicialización
  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  // Cambio de tema
  const cambiaTema = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    console.log('cambio tema a ' + newTheme); // Cambiado para usar el nuevo tema
  };

  return (
    <div className="form-check form-switch ps-5 align-content-center pt-1 bg-main">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={cambiaTema}
        checked={theme === 'dark'} // Ajusta el estado del checkbox según el tema actual
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        <EmojiObjectsIcon className="btn-icon" />
      </label>
    </div>
  );
}
