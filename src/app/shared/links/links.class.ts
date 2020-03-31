export class Links {
    private MainLink = "https://tasks-todos-api.herokuapp.com/";
    private AuthLink = this.MainLink + "auth/";
    private TasksLink = this.MainLink + "tasks/";
    public readonly signUpLink = this.AuthLink + "signup";
    public readonly loginLink = this.AuthLink + "login";
    public readonly logoutLink = this.AuthLink + "logout";
    public readonly verifyLink = this.AuthLink + "verify";
    public readonly userLink = this.AuthLink + "user";

    public readonly MyTasksLink = this.TasksLink + "my";
    public readonly deleteTaskLink = this.TasksLink + "delete";
    public readonly createTaskLink = this.TasksLink + "create";
    public readonly updateTaskLink = this.TasksLink + "update";

}