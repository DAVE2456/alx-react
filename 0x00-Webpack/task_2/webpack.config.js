const path = require('path');                                                   
                                                                                
module.exports = {                                                              
    mode: 'production', //development                                           
    entry: {                                                                    
        main: path.resolve(__dirname, 'js/dashboard_main.js'),                  
    },                                                                          
    output: {                                                                   
        path: path.resolve(__dirname, 'public'),                                
        filename: 'bundle.js',
        assetModuleFilename: '[name][ext]',                                                  
    },
  
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
              type: 'asset/redsource',
              use: [
                'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
                  
               ],
             },
           ]
    },
    //perfomance
    performance: {
                maxAssetSize: 1000000,
        maxEntryPointSize: 1000000,
        },
                                                                       
};
