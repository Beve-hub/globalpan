import { Account, Client, Databases} from 'appwrite';
import {  endponit_url, project_ID } from '.';

const client = new Client();
client.setEndpoint(endponit_url).setProject(project_ID)

export const account = new Account(client);
export const db = new Databases(client);