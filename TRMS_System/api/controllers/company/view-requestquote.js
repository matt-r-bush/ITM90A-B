module.exports = {


  friendlyName: 'View requestquote',


  description: 'Display "Requestquote" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company/requestquote'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
