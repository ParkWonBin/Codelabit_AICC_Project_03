--- DROP
DROP TABLE users;
DROP TABLE posts;
DROP TABLE comments;

--- CREATE
CREATE TABLE users (
    idx NUMBER PRIMARY KEY,
    u_id VARCHAR2(100),
    u_name VARCHAR2(100),
    u_pw VARCHAR2(255)
);

CREATE TABLE posts (
    idx NUMBER PRIMARY KEY,
    p_title VARCHAR2(255),
    p_content CLOB,
    p_author NUMBER,
    CONSTRAINT fk_post_author
        FOREIGN KEY (p_author)
        REFERENCES users(idx)
        ON DELETE SET NULL  
);

CREATE TABLE comments (
    idx NUMBER PRIMARY KEY,
    c_content CLOB,
    c_author NUMBER,
    c_post NUMBER,
    c_parent NUMBER,
    CONSTRAINT fk_comment_author
        FOREIGN KEY (c_author)
        REFERENCES users(idx)
        ON DELETE SET NULL,
    CONSTRAINT fk_comment_post
        FOREIGN KEY (c_post)
        REFERENCES posts(idx)
        ON DELETE SET NULL,
    CONSTRAINT fk_comment_parent
        FOREIGN KEY (c_parent)
        REFERENCES comments(idx)
        ON DELETE SET NULL  
);