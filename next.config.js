const withPlugins = require('next-compose-plugins')

const nextWithLess = require('next-with-less')

// 转换 antd ,用来支持 按需引入组件css
const withTM = require('next-transpile-modules')(['antd'])

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  reactStrictMode: true,
  compiler: {
    //只要有.babelrc文件，就会切回babel编译，这里swc就无效了。
    //styledComponents: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

const plugins = [
  [
    nextWithLess,
    {
      // 配置 less变量, 可以看到页面中的按钮都变成了红色
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            // '@primary-color': '#6768aa'
          }
        }
      },
      javascriptEnabled: true
    }
  ],
  [withTM]
]

// module.exports = nextConfig
module.exports = withPlugins(plugins, nextConfig)
