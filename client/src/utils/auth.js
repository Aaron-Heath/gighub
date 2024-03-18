import {jwtDecode} from 'jwt-decode';
const decode = jwtDecode.default || jwtDecode;

class AuthService {
    getUser() {
        try {
            return decode(this.getToken());
        } catch(err){
            return null;
        }
        
    };

    // Checks if user is still logged in
    loggedIn() {
        // Checks for saved token and whether it's still valid
        const token = this.getToken();
        return token && !this.isTokenExpired(token);
    };

    // Check for expired token
    isTokenExpired(token) {
        try {
            // Decodes token
            const decoded = decode(token);
            // Checks for time remaining before token expiration

            console.log(decoded);
            console.log(Date.now())

            if (decoded.exp > Date.now() / 1000) {
                return false;
            } else {
                console.log("Logging out")
                localStorage.removeItem('id_token', null)
                return true;
            }
        } catch (err) {
            return true;
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
        // window.location = '/'
        

    }
};

export default new AuthService();