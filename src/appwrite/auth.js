import conf from "../Config/Config";
import { Client, Account, ID } from "appwrite";

const appwriteUrl = conf.appwriteUrl;
const appwriteProjectId = conf.appwriteProjectId;

export class AuthService{
    client = new Client();
    account = new Account();

    constructor(){
        this.client
            .setEndpoint(appwriteUrl)
            .setProject(appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount(email, password){
        try {
          const userAccount = await this.account.create(
            ID.unique(),
            email,
            password
          )
          if (userAccount) return userAccount;
          else return null;
        } catch (err) {
            throw err;
        }
    }

    async loginAccount(email, password){
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            if (userAccount) return userAccount;
            else return null;
        } catch (err) {
            throw err;
        }
    }

    async checkAuthState(){
        try {
            const user = await this.account.get();
            if (user) return true;
            else return false;
        } catch (err) {
            throw err;
        }
    }

    async logoutCurrentUser(){
        try {
            await this.account.deleteSession('current');
            return true;
        } catch (err) {
            throw err;
        }
    }
}

const authService = new AuthService();
export default authService;