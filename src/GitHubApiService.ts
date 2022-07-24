import request from "request";
import { Repo } from "./Repo";
import { User } from "./User";

const OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
export class GitHubApiService {
    getUserInfo(username: string, cb: (user: User) => any) {

        request.get('https://api.github.com/users/' + username, OPTIONS, (error: any, response: any, body: any) => {

            let user = new User(body);
            cb(user);
        });
    }

    getRepos(username: string, cb: (repoArray: Repo[]) => any) {

        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, (error: any, response: any, body: any) => {

            let repoArr = body.map((repo: any) => new Repo(repo));
            cb(repoArr);
        });
    }
}