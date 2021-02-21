module.exports = {


  friendlyName: 'View cart',


  description: 'Display "Cart" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cart'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
