const serverStorage = {bookmarks:[],
      deleteBookmark:function(id)
      {
        let index = serverStorage.bookmarks.findIndex((Bookmark)=> Bookmark.id === id);
        if(index != -1)
        {
          serverStorage.bookmarks.splice(index,1);
            return "Deleted successfully.";
        }
        else
        {
            return "Error:Bookmark does not exist.";
        }
      },
      addBookmark:function(body)
      {
        serverStorage.bookmarks.push(body);
      },
      getBookmark:function(id)
      {
          const selectedBookmark = serverStorage.bookmarks.find((bookmark)=> bookmark.id == id);
          
          
          if(selectedBookmark)
          {
              return selectedBookmark;
          }
          else
          {
              return "404";
          }
      },
      getBookmarks:function()
      {
        return serverStorage.bookmarks;
      }

}
module.exports = serverStorage;