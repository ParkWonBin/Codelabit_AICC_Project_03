-- READ
select * from users;
select * from posts;
select * from comments;

--- READ Board
SELECT p.idx as idx, p.p_title as title, u.u_name as author, p.p_created as created
FROM posts p
LEFT JOIN users u ON p.p_author = u.idx
ORDER BY p.p_created DESC;  

---- READ Board with Comments
SELECT 
    p.idx AS idx, 
    p.p_title || ' (' || COALESCE(c.comment_count, 0) || ')' AS title,  -- Appends comment count to the title
    u.u_name AS author, 
    p.p_created AS created
FROM 
    posts p
LEFT JOIN 
    users u ON p.p_author = u.idx
LEFT JOIN 
    (SELECT 
         c_post, 
         COUNT(*) AS comment_count  -- Counts the number of comments for each post
     FROM 
         comments
     GROUP BY 
         c_post
    ) c ON p.idx = c.c_post  -- Joins the subquery result with the posts table on post ID
ORDER BY 
    p.p_created DESC;  
