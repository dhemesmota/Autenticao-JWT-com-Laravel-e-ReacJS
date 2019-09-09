/**
 * Definindo nome para armazenar o token no localStorage
 */
export const TOKEN_KEY = "@myapp-Token";

/**
 * Verifica se existe um token no localStorage,
 * se houver retorna true
 */
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;


/**
 * Pega o token do localStorage
 */
export const getToken = () => localStorage.getItem(TOKEN_KEY);

/**
 * Recebe um token e armazena no localStorage
 * @param {*} token 
 */
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Remove o token do localStorage
 */
export const logout = () => {
    localStorage.clear();
};
