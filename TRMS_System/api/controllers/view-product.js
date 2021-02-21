module.exports = {


  friendlyName: 'View product',


  description: 'Display "Product" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/product'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
