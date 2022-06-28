const withPlugins = require('next-compose-plugins')

const nextWithLess = require('next-with-less')

// 转换 antd ,用来支持 按需引入组件css
const withTM = require('next-transpile-modules')(['antd'])

const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'valzt.cn',
      'api.valzt.cn',
      'raw.githubusercontent.com',
      'webpack.js.org',
      'github.com',
      'simpleicons.org',
      'avatars.githubusercontent.com',
      'beego.vip',
      'www.vectorlogo.zone',
      'images.weserv.nl',


    ]
  },
  webpack: (config, {webpack, isServer, dev}) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    if (!isServer && !dev) {
      //为了避免同一文件被多次打包
      config.optimization.splitChunks.cacheGroups.lib.minChunks = 2
    }
    return config
  },
  reactStrictMode: false,
  // compiler: {
  //   //只要有.babelrc文件，就会切回babel编译，这里swc就无效了。
  //   styledComponents: true
  // },

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
            '@primary-color': '#6768aa'
          }
        }
      },
      javascriptEnabled: true
    }
  ],
  [withTM],
  [withBundleAnalyzer]
]

// module.exports = nextConfig
module.exports = withPlugins(plugins, nextConfig)

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer()
