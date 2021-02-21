module.exports = {


  friendlyName: 'View quotes',


  description: 'Display "Quotes" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company/quotes'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
