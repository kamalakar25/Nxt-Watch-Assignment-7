import React from 'react'

const SavedVideoPlaylist = React.createContext({
  videoPlaylist: [],
  onSaveVideos: () => {},
})

export default SavedVideoPlaylist
