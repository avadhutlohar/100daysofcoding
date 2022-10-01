Suppose there are five developers working on the same project. So, everyone has to know what is actually going with project. Details like assigned task and how much work done by each team member.

So here comes the role of "Version Control System". There are so many version control systems in market but "Git" is one of the best and developed system.

# Setting Up GitHub on local machine

**Step 1**

Create an [GitHub](https://github.com/) account .
Click on Repositories and click on new to create new repository.
Name the Repository as you want.
Choose Public.
Create Repository.

**Step 2**

Download latest version of [Git](https://git-scm.com/downloads) from official website And install it in the local machine.

**Step 3**

Open Visual Studio Code

1.  Make an empty repository
2.  Create any file ( index.html)
3.  Open terminal in vscode.
4.  Check Git version
    ```
    $ git --version
    ```

**Step 4**

Link the Git to a Github Account:

```
$ git config --global user.email "Your email address"
```

```
$ git config --global user.name "Yourname"
```

**Step 5**

_Next step is to initialize the directory_

```
$ git init
```

_For point the folder to the GitHub repository_

- Go to GitHub
- Copy the remote add origin command

```
$ git remote add origin <link>
```

_Check the Status of repository_

```
$ git status
```

The files are not tracking till now(Showing red)

_For adding the files to tracking_

```
$ git add .

```

This will track all files from folder(It will show green after git status)

_Now we can commit them_

```
$ git commit -m "Your message"
```

Now it is ready to push into GitHub repository

```
$ git push origin master
```

Note : For next time you don't need to add origin master you can directly use git push.

**Go to GitHub check if the local files are pushed to this repository.**

### How to launch your website using GitHub pages

- Go to Settings in the Repository you want to launch

- On the left you will see Pages > click on pages

- In source select master/main

- After 5 to 10 min you will see your site is published <link>

**Summary: **

1. Download and install Git
2. Git bash interface
3. Basic Git commands
4. Create a local repository
5. Connect to the remote repository
6. Push the file to GitHub
7. Launch website on GitHub Pages
