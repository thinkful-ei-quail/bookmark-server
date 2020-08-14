module.exports = function(request,response,next)
{
    let {title, desc, url, rating} = request.body;
    rating = Number(rating);
    if(!title)
    {
        return response.status(400).json({message:"Must have title"});
    }
    if(!url)
    {
        return response.status(400).json({message:"Must have url"});
    }
    if(!(url.substring(0,7) == "http://" || url.substring(0,8) == "https://"))
    {
        return response.status(400).json({message:"Url must start with http:// or https://"});
    }
    if(!rating)
    {
        
        return response.status(400).json({message:"Must have rating"});
    }
    if(typeof rating != "number")
    {
        
        return response.status(400).json({message:"Rating must be a number"});
    }
    if(rating > 5 || rating < 1)
    {
        
        return response.status(400).json({message:"Rating must be between 1 and 5"});
    }
    if(!desc)
    {
        
        return response.status(400).json({message:"Must have desc"});
        
    }
    next();
    

    

}