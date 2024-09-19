// AuthProvider.tsx
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from '@/firebase'; // Adjust the import according to your setup

interface User {
    uid: string;
    // You can add other user properties here if needed
}

interface AuthContextType {
    isLoggedIn: boolean;
    user: User | null;
    logout: () => Promise<void>;
    deleteAccount: () => Promise<void>; // Add deleteAccount function to context
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const auth = getAuth();
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const logout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            setUser(null);
            console.log('Logged out');
        } catch (error) {
            console.error('Failed to sign out', error);
        }
    };

    const deleteAccount = async () => {
        if (user) {

        try {
            // Delete user document from Firestore
            await deleteDoc(doc(firestore, 'users', user.uid));

            // Delete user from Firebase Auth
            await deleteUser(auth.currentUser!);

            // Sign out after deletion
            await logout();
            
            console.log('Account deleted successfully');
        } catch (error) {
            console.error('Failed to delete account', error);
        }
      }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({ uid: firebaseUser.uid });
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, logout, deleteAccount }}>
            {children}
        </AuthContext.Provider>
    );
};
