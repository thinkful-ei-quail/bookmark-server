const express = require('express');
const {v4: uuid} = require('uuid');
const bookmarksRouter = express.Router();
const bodyParser = express.json();
const serverStorage = require('./serverStorage');
const {getBookmarks, deleteBookmark, addBookmark, getBookmark} = serverStorage;
const {NODE_ENV} = process.env;
const authValidator = require('./authValidator');
const logger = require('./logger');
const postValidator = require('./postValidator');



bookmarksRouter.route('/bookmarks').get((request, response)=>{
    response.status(200);
    response.json(getBookmarks());
});

bookmarksRouter.route('/bookmarks/:id').get((request, response)=>{
    const {id} = request.params
    const bookmark = getBookmark(id)
    if(bookmark != '404')
    {
        response.status(200);
        response.json(bookmark);   
    }
    else
    {
        response.status(404)
        response.send("404 Error: Bookmark not found.");
    }
});

bookmarksRouter.route('/bookmarks').post(authValidator,postValidator,(request, response)=>{
    const {title,url,description,rating} = request.body;
    
    let bookmark = {
        id:uuid(),
        title:title,
        url:url,
       description:description,
        rating:rating
    }
    addBookmark(bookmark);
    response.status(200);
    response.json(bookmark);
    
});

bookmarksRouter.route('/bookmarks/:id').delete(authValidator,(request, response)=>{
    const {id} = request.params;
    if(deleteBookmark(id) =="Deleted successfully.")
    {
        response.status(200);
        response.send("Deleted Bookmark successfully.");
    }
    else
    {
        response.status(400);
        logger.error(`Tried to delete bookmark at id:${id} but id does not exist.`);
        response.send("Error: Bookmark did not exist.");
    }
    
});




module.exports = bookmarksRouter;
