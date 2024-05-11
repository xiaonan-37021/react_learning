Yarn是一个流行的JavaScript包管理工具，类似于npm，但旨在提供更快、更安全的依赖管理。以下是一些Yarn的常用命令：

1. **初始化新项目**:
   ```sh
   yarn init
   ```
   这将引导你通过创建一个新的`package.json`文件的过程。

2. **添加依赖包**:
   ```sh
   yarn add [package]
   ```
   这会将一个包添加到你的项目中，并更新`package.json`和`yarn.lock`文件。

3. **添加开发依赖包**:
   ```sh
   yarn add [package] --dev
   ```
   与`yarn add`命令类似，但是这会将包添加为开发依赖，适用于那些仅在开发过程中需要的包。

4. **升级依赖包**:
   ```sh
   yarn upgrade [package]
   ```
   这会升级指定的包到最新版本，并更新`yarn.lock`文件。

5. **移除依赖包**:
   ```sh
   yarn remove [package]
   ```
   这会从你的项目中移除一个包，并且也会更新`package.json`和`yarn.lock`文件。

6. **安装所有依赖**:
   ```sh
   yarn
   ```
   或者
   ```sh
   yarn install
   ```
   这会根据`package.json`文件安装所有依赖。

7. **运行脚本**:
   ```sh
   yarn run [script]
   ```
   这会运行`package.json`文件中的"scripts"部分定义的脚本。

8. **清除缓存**:
   ```sh
   yarn cache clean
   ```
   这会清除Yarn的全局缓存，有时候用于解决各种奇怪的问题。

9. **列出已安装的依赖**:
   ```sh
   yarn list
   ```
   这会列出项目中当前安装的所有依赖。

10. **查看特定包的信息**:
    ```sh
    yarn info [package]
    ```
    这会显示关于一个特定包的信息，如当前版本、许可证等。

11. **全局添加包**:
    ```sh
    yarn global add [package]
    ```
    这会将一个包安装为全局包，这样你就可以在任何地方使用它了。

12. **安装指定版本的依赖包**
    ```sh
    yarn add [package]@[version]
    ```
> 这些是Yarn的一些基本和常用命令。Yarn的命令结构设计得非常直观，大多数命令都很容易记住。如果需要更详细的信息或寻找特定的功能，可以参考[Yarn的官方文档](https://yarnpkg.com/lang/en/docs/cli/)。

13 **查看依赖的所有版本**

```js
yarn info <package-name> versions  cnpm view <package-name> versions
```

例如你想查看 `react` 包的所有版本，你可以运行：

```js
yarn info react versions cnpm view vue versions
```

