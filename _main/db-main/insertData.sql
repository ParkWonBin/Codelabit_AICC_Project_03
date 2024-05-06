-- Insert users
INSERT INTO users (idx, u_id, u_name, u_pw) 
VALUES (user_seq.NEXTVAL, 'user1', 'User One', 'pass1');

INSERT INTO users (idx, u_id, u_name, u_pw) 
VALUES (user_seq.NEXTVAL, 'user2', 'User Two', 'pass2');

-- Insert posts
INSERT INTO posts (idx, p_title, p_content, p_author) 
VALUES (post_seq.NEXTVAL, 'Post 1', 'Content of post 1', (SELECT idx FROM users WHERE u_id = 'user1'));

INSERT INTO posts (idx, p_title, p_content, p_author) 
VALUES (post_seq.NEXTVAL, 'Post 2', 'Content of post 2', (SELECT idx FROM users WHERE u_id = 'user2'));

-- Insert comments
INSERT INTO comments (idx, c_content, c_author, c_post) 
VALUES (comment_seq.NEXTVAL, 
    'This is the first comment', 
    (SELECT idx FROM users WHERE u_id = 'user1'), 
    (SELECT idx FROM posts WHERE p_title = 'Post 1')
);

INSERT INTO comments (idx, c_content, c_author, c_post) 
VALUES (comment_seq.NEXTVAL, 
    'This is the second comment', 
    (SELECT idx FROM users WHERE u_id = 'user2'), 
    (SELECT idx FROM posts WHERE p_title = 'Post 2')
);

INSERT INTO comments (idx, c_content, c_author, c_post, c_parent)
SELECT comment_seq.NEXTVAL, 
    'This is the comment on comment', 
    (SELECT idx FROM users WHERE u_id = 'user2'), 
    (SELECT idx FROM posts WHERE p_title = 'Post 2'),
    (SELECT idx FROM comments WHERE ROWNUM = 1)
FROM comments WHERE ROWNUM = 1;

---------------------------------
