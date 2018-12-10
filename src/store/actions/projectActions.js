export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // Make async call to DB
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Josh',
      authorLastName: 'D',
      authorId: 12345,
      createdAd: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project});
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })    
  }
}