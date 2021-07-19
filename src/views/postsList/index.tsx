import { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { fetchPosts } from './postsSlice';

const PostsList = (): ReactElement => {
  const dispatch = useDispatch();
  // const posts = useSelector((state: RootState) => state.posts.posts);
  const postStatus = useSelector((state: RootState) => state.posts.status);
  // const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  // if (postStatus === 'loading') {
  //   content = <div className='loader'>Loading...</div>;
  // } else if (postStatus === 'succeeded') {
  //   const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  //   content = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />);
  // } else if (postStatus === 'error') {
  //   content = <div>{error}</div>;
  // }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
