import { Client, Account, ID } from "appwrite";
import conf from '@/config/Config';

interface CreateAccountParams {
    email: string;
    password: string;
    name: string;
}
interface UpdatePrefsParams {
    address: string;
    phoneNum: string;
    zip: string;
    country: string;
}

interface LoginParams {
    email: string;
    password: string;
}

interface EmailTokenParams {
    email: string;   
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    createAccount({ email, password }: CreateAccountParams) {
        return this.account.create(ID.unique(), email, password).then((userAccount) => {
            return userAccount ? this.login({ email, password }) : userAccount;
        });
    }

    updatePrefs({ address, phoneNum, zip, country }: UpdatePrefsParams) {
        return this.account.updatePrefs({ address, phoneNum, zip, country });
    }

    login({ email, password }: LoginParams) {
        return this.account.createEmailPasswordSession(email, password);
    }

    logout() {
        return this.account.deleteSessions();
    }

    getCurrentUser() {
        return this.account.get();
    }

    createEmailToken({email}:EmailTokenParams ) {
        return this.account.createEmailToken(ID.unique(), email);
    }

    updatePassword() {
        return this.account.updatePassword('','password');
    }

    createRecovery() {
        return this.account.createRecovery('email','Url');
    }
}

const authService = new AuthService();

export default authService;
