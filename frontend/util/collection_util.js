// should pull collections based on currentUser
export const fetchCollections = () => (
  $.ajax({
    method: 'GET',
    url: `/api/collections`
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

export const patchCollection = (collection, collectionId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/collections/${collectionId}`,
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


// collection membership

export const addMember = (collectionId, member) => (
  $.ajax({
    method: 'POST',
    url: `/api/collections/${collectionId}/add_member`,
    data: {member}
  })
);

export const removeMember = (collectionId, member) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/collections/${collectionId}/remove_member`,
    data: {member}
  })
);
