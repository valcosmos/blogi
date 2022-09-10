

// 转换 antd ,用来支持 按需引入组件css

const withPlugins = require('next-compose-plugins')

const nextWithLess = require('next-with-less')

// 转换 antd ,用来支持 按需引入组件css
const withTM = require('next-transpile-modules')(['antd'])

const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development'
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
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
      'images.weserv.nl'
    ]
  }
})

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
