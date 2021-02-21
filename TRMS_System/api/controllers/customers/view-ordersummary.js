module.exports = {


  friendlyName: 'View ordersummary',


  description: 'Display "Ordersummary" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/customers/ordersummary'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
