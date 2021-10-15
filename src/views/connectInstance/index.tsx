import { Component, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '@/store';
import { fetchUserInfo, postUpdated } from '@/store/slices/userInfoSlice';
import './index.scss';

class ConnectInstance extends Component<PropsFromRedux & RouteComponentProps> {
  render(): ReactNode {
    const { userId, postUpdated, fetchUserInfo } = this.props;
    return (
      <section className='connect-instance'>
        <h2>ConnectInstance</h2>
        <div className='point' onClick={postUpdated}>postUpdated</div>
        <div className='point' onClick={fetchUserInfo}>fetchUserInfo</div>
        userId: {userId}
      </section>
    );
  }
}

//将state.userInfo.userId绑定到props的Connect
const mapStateToProps = (state: RootState) => {
  return {
    userId: state.userInfo.userId
  };
};

// 将action的方法绑定到props上
const mapDispatchToProps = {
  postUpdated: () => (postUpdated('555')),
  fetchUserInfo: () => (fetchUserInfo())
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
const dataComponent = connector(ConnectInstance);

export default dataComponent;
