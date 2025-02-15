export const apiBaseUrl = (process.env.NODE_ENV === 'development' ? 'https://7103.api.greenapi.com' : '');

export const apiAdminUrl = apiBaseUrl + '/admin';

export const interceptorsConfig = (config) => {
    const token = localStorage.getItem('token');

    config.headers.Authorization = token ? `Bearer ${token}` : null;

    return config;
}