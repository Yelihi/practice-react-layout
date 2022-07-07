import './singlePost.scss';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/blog/cat.jpeg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon bx bx-edit"></i>
            <i className="singlePostIcon bx bx-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          aut quia quidem libero reiciendis, saepe laborum, dolorem similique
          praesentium tempore cumque, quisquam inventore beatae. Labore, dolore
          a! Consectetur, earum id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur aut quia quidem libero reiciendis,
          saepe laborum, dolorem similique praesentium tempore cumque, quisquam
          inventore beatae. Labore, dolore a! Consectetur, earum id. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequuntur aut quia
          quidem libero reiciendis, saepe laborum, dolorem similique praesentium
          tempore cumque, quisquam inventore beatae. Labore, dolore a!
          Consectetur, earum id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur aut quia quidem libero reiciendis,
          saepe laborum, dolorem similique praesentium tempore cumque, quisquam
          inventore beatae. Labore, dolore a! Consectetur, earum id. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequuntur aut quia
          quidem libero reiciendis, saepe laborum, dolorem similique praesentium
          tempore cumque, quisquam inventore beatae. Labore, dolore a!
          Consectetur, earum id.
        </p>
      </div>
    </div>
  );
}
