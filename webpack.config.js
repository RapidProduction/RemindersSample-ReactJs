function getEntrySources(sources) {
    sources.push('webpack/hot/only-dev-server');
    return sources;
}

var config = {
   entry: {
       reminder: getEntrySources([
           './main.js'
       ])
   },
	
   output: {
      path:'./',
      filename: 'dist/index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
         }
         ,
         { 
             test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
             loader: 'url-loader?limit=100000' 
         }
      ]
   }
}

module.exports = config;