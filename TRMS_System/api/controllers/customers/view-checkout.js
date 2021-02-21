module.exports = {


  friendlyName: 'View checkout',


  description: 'Display "Checkout" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/customers/checkout'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
