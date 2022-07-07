import Sidebar from '../../component/sidebar/Sidebar';
import SinglePost from '../../component/singlePost/SinglePost';
import './single.scss';

export default function Single() {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}
