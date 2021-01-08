import { Client } from "./client";

export class Particulier extends Client{
    public cni: string;
    public dateNaiss: Date;
    public sexe: string;
}
