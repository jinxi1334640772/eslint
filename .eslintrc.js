module.exports = {
    "root": true, //加了root设置为true后，就不会往上级寻找
    "env": {  //环境设置，不同的环境预设了不同的全局环境变量，可设置多个环境
        "browser": true,
        "es6": true
    },
    "extends": [  //继承其他的设置
        "eslint:recommended",
        "plugin:vue/essential"  //继承vue插件下的配置规则
    ],
    "globals": {
        "Atomics": "readonly", //全局变量应该在这里定义一下，这样eslint，就不会报告undefined了，
        "SharedArrayBuffer": "readonly"
    },
    // "parser": "esprima",  //可以选择不同的解析器
    "parserOptions": {    //设置解析器支持的语法规范
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [ //不同的插件有各自不同的规则配置，比如vue和react的规则是不同的
        "vue"
    ],
    // "processor": "a-plugin/a-processor",
    "rules": {  //各种规则需要在这里配置
        "indent": [1, 4],
        "quotes": [1, 'double'],
        "semi": [1, 'always'],
        "no-console": 1,
        "eqeqeq": "warn",
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],
    },
    "overrides": [  //针对某些文件有不同的配置规则，可以覆盖全局的配置规则
        {
            "files": ["*-test.js", "*.spec.js"],
            // "processor": "a-plugin/markdown",
            "rules": {
                "no-unused-expressions": "off",
                "strict": "off"
            }
        }
    ],
    "settings": {  //共享设置，会提供给每一个被执行的规则
        "sharedData": "Hello"
    }
};