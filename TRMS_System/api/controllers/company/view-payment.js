module.exports = {


  friendlyName: 'View payment',


  description: 'Display "Payment" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company/payment'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
