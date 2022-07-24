import { Repo } from "./Repo";

export class User {
    private login: string;
    private fullName: string;
    private repoCount: number;
    private followerCount: number;
    public repos?: Repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;

    }
}