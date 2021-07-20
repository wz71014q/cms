import { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { fetchPosts } from './postsSlice';

const PostsList = (): ReactElement => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.posts.userId);
  const postStatus = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    console.log('useEffect', postStatus);
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <div className='loader'>Loading...</div>;
  } else if (postStatus === 'succeeded') {
    content = <div className='succeeded'>succeeded, {userId}</div>;
  } else if (postStatus === 'error') {
    content = <div>{error}</div>;
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
