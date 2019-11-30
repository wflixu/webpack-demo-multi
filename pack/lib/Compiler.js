const fs = require('fs');
const path = require('path');
let ejs = require('ejs');
let Handlebars = require('handlebars');

// babylon
// @bable/traverse
// @babel/types
// @babel/generator

const babylon = require('babylon');
const t = require('@babel/types');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
class Compiler {
    constructor(config) {
        this.config = config;
        // 保存入口文件的路径
        this.entryId;
        // 保存所有模块的依赖
        this.modules = {};

        this.entry = config.entry;
        // 工作路径
        this.root = process.cwd();
    }

    getSource(modulePath) {
        let content = fs.readFileSync(modulePath, 'utf8');
        return content;
    }
    parse(source, parentPath) {
        let ast = babylon.parse(source);
        let dependencies = [];
        traverse(ast, {
            CallExpression(p) {
                let node = p.node;
                if (node.callee.name == 'require') {
                    node.callee.name = '__webpack_require__';
                    let moduleName = node.arguments[0].value;
                    moduleName = moduleName + (path.extname(moduleName) ? '' : '.js');
                    moduleName = './' + path.join(parentPath, moduleName);
                    dependencies.push(moduleName);
                    node.arguments = [t.stringLiteral(moduleName)];
                };
            }
        })
        let sourceCode = generator(ast).code;
        return {
            sourceCode,
            dependencies
        }
    }
    // 构建模块
    buildModule(modulePath, isEntry) {
        //内容
        let source = this.getSource(modulePath);
        //模块id
        let moduleName = './' + path.relative(this.root, modulePath);
        if (isEntry) {
            this.entryId = moduleName;
        }
        let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName));

        this.modules[moduleName] = sourceCode;

        dependencies.forEach(dep => {
            this.buildModule(path.join(this.root, dep), false);
        })
    }

    emitFile() {
        // 使用数据渲染
        let main = path.join(this.config.output.path, this.config.output.filename);
        let templateStr = this.getSource(path.join(__dirname, 'main.hbs'));
        let code = Handlebars.compile(templateStr)({
            entryId: this.entryId,
            modules: this.modules
        });
        this.assets = {};
        this.assets[main] = code;
        fs.writeFileSync(main, this.assets[main]);
    }

    run() {

        this.buildModule(path.resolve(this.root, this.entry), true);
        console.log(this.modules, this.entryId);

        // 发射文件
        this.emitFile();
    }
}

module.exports = Compiler;