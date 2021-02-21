module.exports = {


  friendlyName: 'View invoice',


  description: 'Display "Invoice" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company/invoice'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
