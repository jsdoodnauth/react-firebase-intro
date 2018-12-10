
const initState = {
  projects: [
    {id: '1', title: 'Title 1', content: 'You can add webfonts, meta tags, or analytics to this file.'},
    {id: '2', title: 'Title 2', content: 'The build step will place the bundled scripts into the <body> tag.'},
    {id: '3', title: 'Title 3', content: 'If you open it directly in the browser, you will see an empty page.'},
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': 
      console.log('CREATED PROJECT', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR': 
      console.log('CREATE PROJECT ERROR', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;