const {override, fixBabelImports, addLessLoader} = require('customize-cra');



module.exports = override(

  
    fixBabelImports('import', { 
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true, }
    ), 
        
    // addLessLoader({
    //     lessOptions: {
    //       javascriptEnabled: true,
    //       modifyVars: { '@primary-color': '#1DA57A' },
    //     },
    //   }),
    addLessLoader({ 
        javascriptEnabled: true, 
        modifyVars: {'@primary-color': '#1DA57A'}, 
    
    
    }), 

    addLessLoader({ 
    loader: 'less-loader',
    options: { javascriptEnabled: true } ,
    }), 
);