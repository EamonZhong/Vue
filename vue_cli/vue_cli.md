##Vue-cli

###使用步骤
####安装   
1. 安装vue-cli的之前要判断是否已经安装了npm，可以再命令工具里输入`npm -v`,如果出现了版本号则说明已经安装了npm和node，接下来就可以安装vue-cli了。
2. 使用npm的命令安装vue-cli`npm install vue-cli -g`
3. 安装完成后输入命令`vue -V`注意这里的v是大写，若出现了版本号则代表已经成功的把vue-cli安装到计算机中了。

####初始化项目
1. 使用 `vue init <template-name> <project-name>`初始化项目:   
	* init:表示要是用vue-cli初始化项目。
	* template-name:表示模板的名称（官方提供了5种模板）。
	* project-name:标识项目的名称。
2. 在模板选择上我们一般会选择webpack所以我们在命令行输入`vue init webpack vuecliTest`，输入命令后，我们将完成以下选项的填写:
	* Project name:项目名称。
	* Project description:项目描述。
	* Author：作者，如果你有配置git的作者，将会自己绑定。
	* Install  vue-router? 是否安装vue的路由插件。
	* Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。
	* setup unit tests with  Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha。
	* Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试。
3. 初始化好第一步后，还将进行以下三个操作：
	* cd 项目目录 --进入到项目目录
	* npm instal --安装项目依赖
	* npm run dev --开发模式下运行程序 	