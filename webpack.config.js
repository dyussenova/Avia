plugins: [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
]
