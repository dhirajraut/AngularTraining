export class Contact {
    private _name: string;
    private _email: string;

    constructor (name: string, email: string) {
        this._name = name;
        this._email = email;
    }
    public get name():string {
        return this._name;
    }
    public set name(nm: string) {
        this._name = nm;
    }
    public get email():string {
        return this._email;
    }
    public set email(em: string) {
        this._email = em;
    }  

    public show(): void {
        console.log(this.name);
        console.log(this._email); // Both with/without _ is ok.
    }
}

export const max_limit: number = 1000;