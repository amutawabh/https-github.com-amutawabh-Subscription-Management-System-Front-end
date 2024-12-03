import axios from "axios";

// إنشاء نسخة من Axios مع إعدادات أساسية
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api", // عنوان API
});

// تصدير النسخة لاستخدامها في جميع أنحاء المشروع
export default instance;
