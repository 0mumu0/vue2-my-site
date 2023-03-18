// vue-cli的配置文件
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://www.zhihu.com/'
            }//域名代理
        }
    }
}