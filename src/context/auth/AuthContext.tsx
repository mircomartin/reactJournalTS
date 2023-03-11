import { createContext } from 'react';


interface ContextProps {
		status: string;
		uid: string | number | null;
		email: string | null;
		displayName:  string | null;
		photoURL:  string | null;
		errorMessage:  string | null;

		checkingAuth: (email: string, password: string) => Promise<void>;
		startGoogleSignIn: () => Promise<void>;
}


export const AuthContext = createContext({} as ContextProps )