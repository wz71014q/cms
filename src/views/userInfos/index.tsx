import { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { fetchUserInfo } from '@/store/slices/userInfoSlice';

const UserInfos = (): ReactElement => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userInfo.userId);
  const userInfoStatus = useSelector((state: RootState) => state.userInfo.status);
  const error = useSelector((state: RootState) => state.userInfo.error);

  useEffect(() => {
    console.log('useEffect', userInfoStatus);
    if (userInfoStatus === 'idle') {
      dispatch(fetchUserInfo());
    }
  }, [userInfoStatus, dispatch]);

  let content;

  if (userInfoStatus === 'loading') {
    content = <div className='loader'>Loading...</div>;
  } else if (userInfoStatus === 'succeeded') {
    content = <div className='succeeded'>succeeded, userId = {userId}</div>;
  } else if (userInfoStatus === 'failed') {
    content = <div>somthing was wrong;<br/>{error}</div>;
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default UserInfos;
