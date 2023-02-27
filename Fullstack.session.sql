-- SELECT blog.title, blog.slugline, blog.date, count(comment.id) FROM blog JOIN comment WHERE blog.id = comment.blog_id;
SELECT `title`, `date`, `slugline`, `user_id` FROM `blog` AS `blog`;