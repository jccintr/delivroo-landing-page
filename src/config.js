// Endereços do painel da loja (delivroo-v2-front-react-admin). Ajuste via .env se o domínio mudar:
//   VITE_ADMIN_URL=https://admin.delivroo.app.br
const ADMIN_URL = (import.meta.env.VITE_ADMIN_URL ?? "https://admin.delivroo.app.br").replace(/\/$/, "");

export const SIGNUP_URL = `${ADMIN_URL}/cadastro`;
export const LOGIN_URL = `${ADMIN_URL}/login`;
export const ADMIN_HOST = ADMIN_URL.replace(/^https?:\/\//, "");
export const WHATSAPP_URL = "https://wa.me/5535984522324";
export const TRIAL_DAYS = 14;
