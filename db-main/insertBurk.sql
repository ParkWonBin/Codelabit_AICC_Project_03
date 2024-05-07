
-- insert posts burk
DECLARE
    total_posts NUMBER := 50;  -- Number of posts and also used to calculate the decrement in days
BEGIN
    FOR i IN 1..total_posts LOOP
        INSERT INTO posts (idx, p_title, p_content, p_author, p_created)
        VALUES (
            post_seq.NEXTVAL, 
            'Post ' || TO_CHAR(i), 
            'Content of post ' || TO_CHAR(i), 
            (SELECT idx FROM users WHERE u_id = 'user1'),
            SYSTIMESTAMP - INTERVAL '1' DAY * (total_posts - i)  -- Decrementing the date by (total_posts - i) days
        );
    END LOOP;
    COMMIT;
END;
/


