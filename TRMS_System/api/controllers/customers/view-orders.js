module.exports = {


  friendlyName: 'View orders',


  description: 'Display "Orders" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/customers/orders'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
