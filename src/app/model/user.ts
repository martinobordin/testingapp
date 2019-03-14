export class User {
    id: number;
    name: string;
    username: string;

    constructor(initValues?: Partial<User>){
        Object.assign(this, initValues);
    }
}
