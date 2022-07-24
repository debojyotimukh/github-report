import { GitHubApiService } from "./GitHubApiService";
import { Repo } from "./Repo";
import { User } from "./User";
import _ from 'lodash';

let svc = new GitHubApiService();
if (process.argv.length < 3) {
    console.log('Please provide the username');
}
else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            user.repos = _.take(_.sortBy(repos, [(repo: Repo) => repo.size * -1]), 5);
            console.log(user);
        });

    });
}