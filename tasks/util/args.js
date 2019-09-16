// 处理命令行
import yargs from ' yargs ';
// 区分线上线下开发环境
const args = yargs
    // 选项部分 输入的是否有这个参数
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    // 监听
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all fils'
    })
    // 日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    // 映射
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })

    // 设置服务器端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv