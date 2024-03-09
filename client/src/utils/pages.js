const storageKey = 'lastPage';

/**
 * Stores the last page visited to local storage to enable redirecting to it after successful login.
 * Should NOT be run on login or signup pages
 */
export function storePage(){
    localStorage.setItem(storageKey, window.location.pathname);
}

/**
 * Redirect to last page. If not stored in localStorage, redirect to home.
 */
export function redirectToLast() {
    const redirectLocation = localStorage.getItem(storageKey) || '/';
    window.location = redirectLocation;
    
}