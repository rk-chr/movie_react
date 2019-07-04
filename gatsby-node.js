exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/movies/)) {
    page.matchPath = '/movies/:id';

    // Update the page.
    createPage(page);
  }
};


// exports.onCreateWebpackConfig = ({ stage, actions }) => {
//   if (stage === 'build-html') {
//     actions.loader('null', {
//       test: /js-cookie/,
//       loader: 'null-loader',
//     });
//   }
// };
