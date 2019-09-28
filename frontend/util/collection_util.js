// should pull collections based on currentUser
export const fetchCollections = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/collections`
  })
);

//should pull collectionId from the history
export const fetchCollection = collectionId => (
  $.ajax({
    method: 'GET',
    url: `/api/collections/${collectionId}`
  })
);

//via form
export const postCollection = collection => (
  $.ajax({
    method: 'POST',
    url: `/api/collections/`,
    data: {collection}
  })
);

export const patchCollection = collection => (
  $.ajax({
    method: 'PATCH',
    url: `/api/collections/${collection.id}`,
    data: {collection}
  })
);


//via button
export const destroyCollection = collectionId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/collections/${collectionId}`
  })
);
