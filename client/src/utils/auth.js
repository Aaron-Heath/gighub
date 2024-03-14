import {jwtDecode} from 'jwt-decode';
const decode = jwtDecode.default || jwtDecode;

class AuthService {
    getUser() {
        return decode(this.getToken());
    };

    // Checks if user is still logged in
    loggedIn() {
        // Checks for saved token and whether it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    };

    // Check for expired token
    isTokenExpired(token) {
        try {
            // Decodes token
            const decoded = decode(token);
            // Checks for time remaining before token expiration
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        };
    };

    // For getting the user token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // For setting a user token on login in localStorage
    login(idToken) {
        // Save token to localStorage
        localStorage.setItem('id_token', idToken);
    };

    // For removing user token from localStorage on user logout
    logout() {
        // Removes token from localStorage
        localStorage.removeItem('id_token');
        window.location = '/'

    }
};

export default new AuthService();